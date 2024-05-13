import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";
import {redirect} from "next/navigation";
import cookieParser from "cookie-parser";

export async function getUser(username,password) {
    try {
        

        console.log('calling api with username:', username, 'and password:', password);
        // Send the request to the API
        const response = await fetch('https://fintech-blog-749ab6e21c45.herokuapp.com/secure/login', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'username': username, 'password': password}), // Use params.toString() instead of JSON.stringify(params)
        });

        // if (response.status !== 200) {
        //     // return status code 401   
        //     // console.log('res status: ', response.status);
        //     return ({error: 'Invalid credentials'}, response.status);
        // }

        
        const jsonResponse = await response.json();
        console.log('this is from api call: ', jsonResponse); // Await the response before logging
        return jsonResponse;
    } catch (error) {
        console.log('Failed to fetch user', error);
        throw new Error('Failed to find the user.');
    }
}

const secretKey = "abimbola";
const key = new TextEncoder().encode(secretKey);
export async function createUser(username, email, password) {
    try {


        // Send the request to the API
        const response = await fetch('https://fintech-blog-749ab6e21c45.herokuapp.com/secure/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'username': username, 'email': email, 'password': password})
        });

        // console.log('after API call')

        if (response.status !== 201){
            switch (response.status){
                case 401:
                    return 'Unauthorized Action'
                case 422:
                    return 'Action Not Allowed'
                default:
                    return 'Server Error try again later'
            }
        }

        const res = await response.json()
        console.log(res)
        return res
    } catch (error){
        console.log('Error: ', error)
        throw new Error('Registration Failed')
    }
}
