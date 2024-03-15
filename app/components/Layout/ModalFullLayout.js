'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function ModalFullLayout({ children }) {

    const { isOpen, closeModal } = useState(false);

    if (!isOpen) return null;

  return (
    <div className="flex items-center justify-center h-screen">
      <button
          className="absolute top-0 right-0 w-20 h-20 flex justfiy-center items-center"
          onClick={closeModal}
      >
        <FontAwesomeIcon icon={faCircleXmark} size="2x" />
      </button>
      {children}
    </div>
  );
}
