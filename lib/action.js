'use server'
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";
import { createUser } from "@/lib/auth";

export async function authenticate(formData) {
    try {
        await signIn("credentials", formData)
    } catch (error) {
        return 'Invalid credentials.'
    }
}
export async function logout() {
    await signOut()
}

export async function register(username, email, password) {
    const response = await createUser(username, email, password);
    console.log(response)
    return response
}