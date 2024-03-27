"use client";

import { useState } from "react";
import ModalFullLayout from "@/app/components/Layout/ModalFullLayout";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //
    //     setForgotPassword(false);
    //     setCodeSent(true);
    // };

    return (
            <div className="mx-auto max-w-lg">
                <div className="login-title text-xl mb-3" style={{ color: "#02A29E" }}>
                    Recover my Profile
                </div>
                <div className="welcome-message text-gray-500 mb-6">
                    This is an attempt to recover for existing profile
                </div>

                <form >
                    <div className="form-group mb-3">
                        <label htmlFor="email">Enter recovery email</label>
                        <div className="input-field">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                aria-label="Enter recovery email"
                                className="w-full border border-solid border-gray-300 px-3 py-1 rounded"
                                placeholder="Enter recovery email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="login-button w-full bg-gray-300 rounded py-2 my-3"
                    >
                        Send code
                    </button>
                </form>
                <div className="form-footer">
                    <p>
                        Did not receive the code?{" "}
                        <span className="text-indigo-500">
              <button className="border-0">Resend code</button>
            </span>
                    </p>
                </div>
            </div>
    );
}
