"use client";

import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConfirmEdit = ({ onClose }) => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    setSlideIn(true);
    return () => setSlideIn(false);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white transition-transform duration-300 transform ${
        slideIn ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="max-w-[424px]  flex flex-col gap-5">
        <button
          className="absolute flex -top-28 -right-20 w-[263px] h-[263px] rounded-full bg-gray-shade-55 hover:bg-primary-green duration-300"
          onClick={onClose}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="text-[#AC0000] mt-32 ml-20"
            style={{ width: "62px", height: "62px" }}
          />
        </button>
        <p className="text-[32px] text-center">
          Hey Admin, are sure you want to <strong>edit</strong>?
        </p>
        <button className="w-full bg-gray-300 rounded py-2 my-3 border border-solid border-transparent hover:bg-primary-green hover:text-white duration-300">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmEdit;
