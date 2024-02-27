import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center justify-center fixed bottom-20 right-5 w-14 h-14 outline outline-1 outline-cyan-600 outline-offset-2 rounded-full bg-cyan-600"
    >
      <FontAwesomeIcon icon={faArrowUp} style={{ color: "#ffffff" }} />
    </button>
  );
};

export default ScrollToTopButton;
