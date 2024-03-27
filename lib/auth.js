import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {redirect} from "next/navigation";

const secretKey = "abimbola";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1w")
        .sign(key);
}

export async function decrypt(input) {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function register(formData) {
    // Prepare the request body
    const body = new URLSearchParams();
    for (const [key, value] of formData) {
        body.append(key, value);
    }

    // Send the request to the API
    const response = await fetch('https://fintech-blog-749ab6e21c45.herokuapp.com/secure/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
    });

    // Check if the response is successful
    if (!response.ok) {
        console.error('Failed to register:', response.status);
        return;
    }

    // Check if the response was redirected
    if (response.redirected) {
        window.location.href = response.url;
        return;
    }

    // Get the user data from the response
    let user;
    if (response.headers.get('Content-Type').includes('application/json')) {
        user = await response.json();
    } else {
        // Handle non-JSON response data
        console.error('Unexpected response format');
        return;
    }

    // Create the session
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user, expires });

    // Save the session in a cookie
    cookies().set('session', session, { expires, httpOnly: true });

    // Redirect to the dashboard
    redirect('/dashboard');
}

export async function login(formData) {
    // Prepare the request body
    const body = new URLSearchParams();
    for (const [key, value] of formData) {
        body.append(key, value);
    }

    // Send the request to the API
    const response = await fetch('https://fintech-blog-749ab6e21c45.herokuapp.com/secure/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
    });

    // Check if the response is successful
    if (response.ok) {
        // Get the user data from the response
        const user = await response.json();

        // Create the session
        const expires = new Date(Date.now() + 10 * 1000);
        const session = await encrypt({ user, expires });

        // Save the session in a cookie
        cookies().set('session', session, { expires, httpOnly: true });
    } else {
        // Handle the error case
        return response.status;
    }
}


export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function updateSession(request) {
    const session = request.cookies.get('session')?.value;
    let res = NextResponse.next();

    if (session) {
        // Refresh the session so it doesn't expire
        const parsed = await decrypt(session);
        const now = new Date();

        // If the session has expired, redirect to the login page
        if (parsed.expires < now) {
            const url = request.nextUrl.clone();
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }

        // Update the session expiration time to 7 days
        parsed.expires = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // Extend the session by 7 days

        res.cookies.set({
            name: 'session',
            value: await encrypt(parsed),
            httpOnly: true,
            expires: parsed.expires,
        });
    }

    return res;
}