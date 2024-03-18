import { faArrowUp, faHeadset } from "@fortawesome/free-solid-svg-icons";
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
    <div className="flex flex-col gap-5 fixed bottom-20 right-3 lg:right-14">
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-11 h-11 outline outline-1 outline-primary-green outline-offset-2 rounded-full bg-primary-green"
      >
        <FontAwesomeIcon icon={faArrowUp} style={{ color: "#ffffff" }} />
      </button>
      <button className="flex items-center justify-center w-11 h-11 outline outline-1 outline-primary-green outline-offset-2 rounded-full bg-primary-green">
        <FontAwesomeIcon icon={faHeadset} style={{ color: "#ffffff" }} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
