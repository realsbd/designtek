import { updateSession } from "./lib/auth";
import {NextResponse} from "next/server";

export async function middleware(request) {
    // update the session before checking if the user is authenticated
    const response = await updateSession(request)

//     get URL path of the current request
    const requestPath = request.nextUrl.pathname

    if (requestPath.startsWith('/dashboard') && !response.cookies.get('session')) {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    return response
}

export const config = {
    matcher: ['/dashboard/:path*']
}