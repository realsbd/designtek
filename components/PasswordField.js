'use client';

import { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

export default function PasswordField() {
    // const { showPassword, togglePassword } = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="flex gap-1 items-center input-field w-full rounded border border-solid border-gray-300 ">
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                aria-label="Enter your password"
                placeholder="Enter your password"
                required
                className="w-full rounded px-3 py-[5px]"
            />
            <span onClick={togglePassword} className="pointer p-2">
                {showPassword ? (<FontAwesomeIcon icon={faEye} />) : (<FontAwesomeIcon icon={faEyeSlash} />)}

              </span>
        </div>
    );
}