"use client";

import { useState } from "react";
import ModalFullLayout from "./Layout/ModalFullLayout";

export default function CodeSent() {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (index, e) => {
    if (isNaN(e.target.value)) return false;

    // If pasting a 4-digit code, distribute each digit to the inputs
    if (e.target.value.length === 4) {
      const newCode = e.target.value.split("");
      setCode(newCode);
      return;
    }

    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join("");
    console.log(fullCode);
  };

  return (
    <ModalFullLayout>
      <div className="mx-auto">
        <div className="login-title text-xl mb-3" style={{ color: "#02A29E" }}>
          Enter code
        </div>
        <div className="welcome-message text-gray-500 mb-6">
          Enter the code that was sent to your email
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                className="w-[57px] h-[44px] text-cyan-600 font-bold border border-solid border-gray-300 flex text-center rounded-lg items-center"
                onChange={(e) => handleChange(index, e)}
              />
            ))}
          </div>
        </form>
      </div>
    </ModalFullLayout>
  );
}
