"use client";

import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ConfirmEdit from "@/app/components/admin/ConfirmEdit";
import CloseButton from "./CloseButton";
import ConfirmExit from "./ConfirmExit";

const UserCreate = ({
  setScroll,
  setShowUserCreate,
  setFlex,
  setUserModal,
  selectedRole,
}) => {
  const [slideIn, setSlideIn] = useState(false);
  const [showConfirmExit, setShowConfirmExit] = useState(false);

  useEffect(() => {
    setSlideIn(true);
    return () => setSlideIn(false);
  }, []);

  const handleCloseConfirmExit = () => {
    setShowConfirmExit(false);
    setScroll(true);
  };

  const handleCloseCreate = () => {
    setShowConfirmExit(true);
    setScroll(false);
    setFlex(false);
  };

  const handleConfirmExit = () => {
    setShowConfirmExit(false);
    setScroll(true);
    setFlex(true);
    setUserModal(false);
    setShowUserCreate(false);
  };

  return (
    <div
      className={`profile-edit w-[90%]relative lg:max-w-[1118px] ml-auto bg-white transition-transform duration-300 transform ${
        slideIn ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {showConfirmExit && (
        <div className="fixed z-50 top-0 right-0 left-0 w-full screen_height overflow-hidden">
          <ConfirmExit
            onClose={handleCloseConfirmExit}
            onConfirm={handleConfirmExit}
          />
        </div>
      )}

      <CloseButton onClose={handleCloseCreate} />
      <div className="pt-10 px-3 sm:px-10 md:px-[100px] pb-[100px]">
        <h1 className="text-xl md:text-[32px] font-medium mt-20 mb-14">
          Add as {selectedRole}
        </h1>
        <div className="flex gap-10 mt-7">
          <div className="relative">
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden flex justify-center items-center">
              <Image
                src="/img/admin-profile-image.png"
                width={30}
                height={30}
                alt="user profile"
                className="w-full h-full"
              />
            </div>
            <label
              htmlFor="image"
              className="absolute bg-white w-8 h-8 cursor-pointer bottom-2 -right-2 flex justify-center items-center rounded-full shadow-lg"
            >
              <FontAwesomeIcon icon={faPencil} />
            </label>
            <input type="file" id="image" className="hidden" />
          </div>
          <h1 className="text-2xl font-medium">Edit profile</h1>
        </div>

        <div className="my-7">
          <form className="w-full">
            <h2 className="text-2xl font-medium">Account Management</h2>

            <div className="flex flex-col-reverse md:flex-row gap-10 lg:gap-[100px] mt-7">
              <div className="w-full flex flex-col gap-4">
                {/* first part */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="new-password">Enter new password</label>
                  <div className="input-field">
                    <input
                      type="password"
                      id="new-password"
                      className="w-full rounded border-2 text-sm focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                    ></input>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="password2">Re-enter password</label>
                  <div className="input-field">
                    <input
                      type="password"
                      id="password2"
                      className="w-full rounded border-2 text-sm focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                    ></input>
                  </div>
                </div>

                <input
                  type="button"
                  value="Send reset link"
                  className="login-button w-full bg-gray-300 rounded py-2 my-3 border border-solid border-transparent hover:bg-primary-green hover:text-white duration-300"
                />

                <button
                  type="submit"
                  className="login-button w-full bg-gray-300 rounded py-2 my-3 border border-solid border-transparent hover:bg-primary-green hover:text-white duration-300"
                >
                  Save changes
                </button>

                <div className="flex flex-col gap-2">
                  <label htmlFor="status">2FA Status</label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="status"
                      className="w-full rounded border-2 text-sm focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                    ></input>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4">
                {/* second part */}

                <div className="flex flex-col gap-2">
                  <label htmlFor="firstname">First Name</label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="firstname"
                      className="w-full rounded border-2 text-sm focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                    ></input>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="lastname">Last Name</label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="lastname"
                      className="w-full rounded border-2 text-sm focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                    ></input>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="username">User Name</label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="username"
                      className="w-full rounded border-2 text-sm focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                    ></input>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="displayname">Displayed Name</label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="displayname"
                      className="w-full rounded border-2 text-sm focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-medium my-7">Contact Information</h2>

            <div className="flex flex-col md:flex-row gap-10 lg:gap-[100px] mt-7">
              <div className="w-full flex flex-col gap-4">
                {/* first part */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <div className="input-field">
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded border-2 text-sm focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                    ></input>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4">
                {/* second part */}

                <div className="flex flex-col gap-2">
                  <label htmlFor="website">Website</label>
                  <div className="input-field">
                    <input
                      type="text"
                      id="website"
                      className="w-full rounded border-2 text-sm focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                    ></input>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-medium my-7">About the User</h2>

            <div className="w-full flex flex-col gap-4">
              {/* first part */}
              <div className="flex flex-col gap-2">
                <label htmlFor="biography">Biography Information</label>
                <div className="input-field">
                  <textarea
                    id="biography"
                    className="resize-none h-[265px] w-full rounded border-2 text-sm focus:outline-primary-green border-solid border-gray-300 px-3 py-[8px]"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreate;
