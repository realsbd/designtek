import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
// import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import AuthLayout from '../components/Layout/AuthLayout'


export default function Login() {
    return (
        <AuthLayout>
            <div className="mx-auto">
                <div className="login-title text-indigo-300 text-xl mb-3">Log in</div>
                <div className="welcome-message text-gray-500 mb-6">Welcome! Please enter your details.</div>
                <div className="form-group">
                    <div className="flex items-center gap-2 login-with-google border rounded border-gray-300 justify-center my-2">
                        <FontAwesomeIcon icon={faGoogle} size='2x' />
                        <div>Log in with Google</div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="flex items-center gap-2 login-with-apple border rounded border-gray-300 justify-center my-2">
                        <FontAwesomeIcon icon={faApple} size='2x' />
                        <div>Log in with Apple</div>
                    </div>
                </div>
                <div className="divider my-5 text-center">
                    <div className="divider-line" />
                    <div className="divider-text">or</div>
                    <div className="divider-line" />
                </div>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <div className="input-field">
                            <input type="text" id="email" aria-label="Enter your email" className="w-full rounded" />
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="password">Password</label>
                        <div className="input-field">
                            <input type="password" id="password" aria-label="Enter your password" className="w-full rounded" />
                        </div>
                    </div>
                    <div className="forgot-password my-3 text-right">
                        <Link href="#" className="text-right hover:text-indigo-300">Forgot password?</Link>
                    </div>
                    <button className="login-button w-full bg-gray-300 rounded py-2 my-3">Log in</button>
                </form>
                <div className="form-footer">
                    <p>Don't have an account? <span className="text-indigo-500"><Link href="/signup">Sign up for free</Link></span></p>
                </div>
            </div>
        </AuthLayout>
    )
}