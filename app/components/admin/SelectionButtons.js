import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectionButtons = () => {
  return (
    <div className="flex gap-5 items-center text-[13px]">
      {/* Add delete, edit, and freeze buttons */}
      <button className="text-admin-red-5 flex items-center gap-2 text-[13px] font-medium">
        <FontAwesomeIcon
          icon={faTrashCan}
          style={{ width: "24px", height: "24px" }}
        />
        Delete
      </button>
      <button className="text-gray-shade-30 flex items-center gap-2 text-[13px]">
        <FontAwesomeIcon
          icon={faPen}
          style={{ width: "24px", height: "24px" }}
        />
        Edit
      </button>
      <button className="text-gray-shade-30 text-[13px]">Freeze Profile</button>
    </div>
  );
};

export default SelectionButtons;
