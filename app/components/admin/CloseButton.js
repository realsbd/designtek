import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CloseButton = ({ onClose }) => {
  return (
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
  );
};

export default CloseButton;
