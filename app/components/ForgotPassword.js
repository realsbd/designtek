import ModalFullLayout from './Layout/ModalFullLayout'
import Link from 'next/link'

export default function ForgotPassword() {
    return (
        <ModalFullLayout>
            <div className="mx-auto">
                <div className="login-title text-xl mb-3" style={{ color: "#02A29E" }}>Recover my Profile</div>
                <div className="welcome-message text-gray-500 mb-6">This is an attempt to recover for existing profile</div>

                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="email">Enter recovery email</label>
                        <div className="input-field">
                            <input type="text" id="email" aria-label="Enter recovery email" className="w-full rounded" />
                        </div>
                    </div>
                    <button className="login-button w-full bg-gray-300 rounded py-2 my-3">Log in</button>
                </form>
                <div className="form-footer">
                    <p>Did not receive the code? <span className="text-indigo-500"><Link href="#">Resend code</Link></span></p>
                </div>
            </div>
        </ModalFullLayout>
    )
}