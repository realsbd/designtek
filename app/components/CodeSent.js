import ModalFullLayout from './Layout/ModalFullLayout'
import Link from 'next/link'

export default function CodeSent() {
    return (
        <ModalFullLayout>
            <div className="mx-auto">
                <div className="login-title text-xl mb-3" style={{ color: "#02A29E" }}>Enter code</div>
                <div className="welcome-message text-gray-500 mb-6">Enter the code that was sent to your email</div>

                <form>
                    <div className="form-group mb-3">
                        <div className="input-field">
                            <input type="text" id="email" aria-label="Enter recovery email" className="w-full rounded" />
                        </div>
                    </div>
                </form>
            </div>
        </ModalFullLayout>
    )
}