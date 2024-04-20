import { useState } from "react";
import CloseButton from "./CloseButton";

const AddNewUserModal = ({
  setUserModal,
  setScroll,
  setShowUserCreate,
  setFlex,
  selectedRole,
  setSelectedRole,
}) => {
  const handleCloseModal = () => {
    setUserModal(false);
  };

  const handleOpenUserCreate = () => {
    setShowUserCreate(true); // Show UserCreate component
    setScroll(true);
    setFlex(false);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value); // Update selectedRole state with the value of the selected radio button
  };

  return (
    <div className="">
      <div className="w-[648px] h-[405px] flex justify-center items-center rounded-2xl relative overflow-hidden bg-white">
        <CloseButton onClose={handleCloseModal} />
        <div>
          <h1 className="text-2xl font-medium mb-5">Add new user</h1>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="role"
                id="administrator"
                value="Administrator"
                onChange={handleRoleChange}
              />
              <label htmlFor="administrator">Add as Administrator</label>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="role"
                id="editor"
                value="Editor"
                onChange={handleRoleChange}
              />
              <label htmlFor="editor">Add as Editor</label>
            </div>
            <div className="flex gap-3 items-center">
              <input
                type="radio"
                name="role"
                id="contributor"
                value="Contributor"
                onChange={handleRoleChange}
              />
              <label htmlFor="contributor">Add as Contributor</label>
            </div>

            <button
              onClick={handleOpenUserCreate}
              disabled={!selectedRole}
              className={`login-button w-full bg-gray-300 rounded py-2 my-3 border border-solid border-transparent duration-300 ${
                selectedRole
                  ? "hover:bg-primary-green hover:text-white duration-300"
                  : "text-white bg-gray-300"
              }`}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewUserModal;
