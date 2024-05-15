"use client";

import { useEffect, useState } from "react";

import CloseButton from "./CloseButton";

const ConfirmEdit = ({ onClose, onConfirm }) => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
    return () => setSlideIn(false);
  }, []);

  return (
    <div
      className={`fixed px-3 md:px-0 top-0 bottom-0 left-0 w-full screen_height flex justify-center items-center bg-white transition-transform duration-300 transform ${
        slideIn ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="max-w-[424px]  flex flex-col gap-5">
        <CloseButton onClose={onClose} />
        <p className="text-[32px] text-center">
          Hey Admin, are sure you want to <strong>edit</strong>?
        </p>
        <button
          onClick={onConfirm}
          className="w-full bg-gray-300 rounded py-2 my-3 border border-solid border-transparent hover:bg-primary-green hover:text-white duration-300"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmEdit;
