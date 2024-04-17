"use client";

import { useState } from "react";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormFields = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full rounded border-2 focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmFor="password">Password</label>
          <div
            className={`flex gap-1 items-center input-field w-full rounded border-2 border-solid ${
              isFocused ? "border-primary-green" : "border-gray-300"
            }`}
          >
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              aria-label="Enter your password"
              placeholder="Enter your password"
              required
              className="w-full rounded px-3 py-[5px] outline-none"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <span
              onClick={togglePassword}
              className={`pointer p-2 ${
                isFocused ? "text-primary-green" : "text-gray-400"
              }`}
            >
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFields;
