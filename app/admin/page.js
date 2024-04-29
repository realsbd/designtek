"use client";

import { useState } from "react";
import Layout from "../components/admin/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "../components/Pagination";
import ProfileEdit from "../components/admin/ProfileEdit";
import AddNewUserModal from "../components/admin/AddNewUserModal";
import UserCreate from "../components/admin/UserCreate";
import Image from "next/image";
import NormalFilters from "../components/admin/NormalFilters";
import SelectionButtons from "../components/admin/SelectionButtons";
import PostsTable from "../components/admin/PostsTable";
import UsersTable from "../components/admin/UsersTable";
import DeletedPost from "../components/admin/DeletedPost";

const users = {
  columns: [
    "Username",
    "Name",
    "Email",
    "Role",
    "Posts",
    "2FA Status",
    "Last Login",
    "",
  ],
  user: [
    {
      username: "Valeta Squad",
      name: "David Bolanle",
      email: "davidbolanle08@gmail.com",
      role: "Editor",
      posts: 232,
      status: "Verified",
      duration: "6 min ago",
    },
    {
      username: "Valeta Squad",
      name: "David Bolanle",
      email: "davidbolanle08@gmail.com",
      role: "Editor",
      posts: 232,
      status: "Verified",
      duration: "6 min ago",
    },
    {
      username: "Valeta Squad",
      name: "David Bolanle",
      email: "davidbolanle08@gmail.com",
      role: "Editor",
      posts: 232,
      status: "Verified",
      duration: "6 min ago",
    },
  ],
};

const deletedPosts = {
  columns: [
    "Username",
    "Name",
    "Posts",
    "Role",
    "Recent Date",
    "Time",
    "Reason",
  ],
  users: [
    {
      username: "Valeta Squad",
      name: "David Bolanle",
      posts: 32,
      role: "Contributor",
      recentDate: "14 . February . 2024",
      time: "6 min ago",
      reason: "AI generated",
    },
    {
      username: "Valeta Squad",
      name: "David Bolanle",
      posts: 32,
      role: "Editor",
      recentDate: "14 . February . 2024",
      time: "6 min ago",
      reason: "AI generated",
    },
    {
      username: "Valeta Squad",
      name: "David Bolanle",
      posts: 32,
      role: "Contributor",
      recentDate: "14 . February . 2024",
      time: "6 min ago",
      reason: "AI generated",
    },
  ],
};

const AdminPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [showUserCreate, setShowUserCreate] = useState(false); // Add state to control UserCreate visibility
  const [scroll, setScroll] = useState(true);
  const [flex, setFlex] = useState(true);
  const [selectedRole, setSelectedRole] = useState(null);
  const [singleCheck, setSingleCheck] = useState(false);
  const [multipleCheck, setMultipleCheck] = useState(false);
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [userSelection, setUserSelection] = useState({});
  const [filter, setFilter] = useState("all-users");
  const [showDeletedPost, setShowDeletedPost] = useState(false);

  // Function to toggle selection for a specific user
  const toggleUserSelection = (userId) => {
    setUserSelection((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  const openProfileModal = () => {
    setProfileModal(true);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".profile-edit")) {
      setProfileModal(false);
    }
  };

  const handleUserChange = (value) => {
    if (value === "add-new-user") {
      setUserModal(true);
      setScroll(false);
    } else {
      setUserModal(false);
    }
  };

  const toggleSingleCheck = () => {
    setSingleCheck(!singleCheck);
    toggleSelectionMode();
  };

  const toggleMultipleCheck = () => {
    setMultipleCheck(!multipleCheck);
  };

  const toggleSelectionMode = () => {
    setIsSelectionMode(!isSelectionMode);
  };

  return (
    <Layout openModal={openProfileModal}>
      <div className="mt-10">
        <h1 className="text-2xl">Admin Dashboard</h1>
        <div className="mt-5 flex flex-wrap-reverse gap-2 justify-between items-center w-full">
          <div className="overflow-auto py-1">
            {/* <div className="flex gap-4 items-center max-[847px]:w-[700px] text-[13px]">
              <div>
                <select className="w-28 outline-none">
                  <option value="all-profiles">All profiles</option>
                  <option value="active-profiles">Active profiles</option>
                  <option value="inactive-profiles">Inactive profiles</option>
                </select>
              </div>

              <div>
                <select
                  className="w-24 outline-none"
                  onChange={(e) => handleUserChange(e.target.value)}
                >
                  <option value="all-users">All users</option>
                  <option value="add-new-user">Add new users</option>
                  <option value="administrators">Administrators</option>
                  <option value="editors">Editors</option>
                  <option value="contributors">Contibutors</option>
                </select>
              </div>

              <div>
                <select className="w-24 outline-none">
                  <option value="deleted">Deleted</option>
                  <option value="deleted-profiles">Deleted profiles</option>
                  <option value="deleted-posts">Deleted posts</option>
                </select>
              </div>

              <div>
                <button>View Posts</button>
              </div>

              <div>
                <button>Back up</button>
              </div>

              <div>
                <button>Plugins</button>
              </div>

              <div>
                <button>Revenue</button>
              </div>

              <div>
                <button>Site kits</button>
              </div>
            </div> */}
            {!isSelectionMode ? (
              <NormalFilters
                setFilter={setFilter}
                handleUserChange={handleUserChange}
              />
            ) : (
              <SelectionButtons />
            )}
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <FontAwesomeIcon icon={faBell} size="lg" />
              <div className="absolute -right-2 -top-2 w-4 text-xs h-4 rounded-full bg-red-500 flex justify-center items-center text-white">
                3
              </div>
            </div>

            <div
              className="flex gap-1 px-3 py-1 items-center input-field w-full rounded border border-solid border-primary-green"
              style={{ width: "300px" }}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={`w-6 h-6 ${
                  isFocused ? "text-primary-green" : "text-gray-shade-50"
                }`}
              />
              <input
                className="w-full outline-none"
                type="text"
                placeholder="Search users"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
          </div>
        </div>

        <div className="my-3">
          <div className="flex gap-4 text-[13px]">
            <div className="flex items-center gap-2">
              <button onClick={toggleSingleCheck}>
                <Image
                  src={`${
                    singleCheck ? "/img/check-box.svg" : "/img/uncheck-box.svg"
                  }`}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  alt="check"
                />
              </button>
              <p className="leading-none">
                {!singleCheck ? "Select" : "Unselect"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={toggleMultipleCheck}>
                <Image
                  src={`${
                    multipleCheck
                      ? "/img/check-box.svg"
                      : "/img/uncheck-box.svg"
                  }`}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  alt="check"
                />
              </button>
              <p className="leading-none">
                {!multipleCheck ? "Multiple selection" : "Unselect multiple"}
              </p>
            </div>
          </div>
        </div>

        <div className="h-full w-full bg-admin-red-0 p-5 md:p-10">
          <h2 className="mb-5 text-xl">All users(300)</h2>

          <div className="overflow-auto">
            {filter === "all-users" && (
              <UsersTable
                data={users}
                isSelectionMode={isSelectionMode}
                toggleUserSelection={toggleUserSelection}
                userSelection={userSelection}
              />
            )}

            {filter === "deleted-posts" && (
              <PostsTable
                data={deletedPosts}
                isSelectionMode={isSelectionMode}
                toggleUserSelection={toggleUserSelection}
                userSelection={userSelection}
                setShowDeletedPost={setShowDeletedPost}
              />
            )}
          </div>
        </div>
        <div className="my-3">
          <Pagination />
        </div>
      </div>

      {/* PROFILE EDIT */}

      {profileModal && (
        <div
          className={`z-10 fixed w-full screen_height top-0 right-0 overflow-x-hidden left-0 backdrop_bg rm_scroll ${
            scroll ? "overflex-y-scroll" : "overflow-y-hidden"
          }`}
          onClick={handleClickOutside}
        >
          <ProfileEdit setScroll={setScroll} />
        </div>
      )}

      {/* ADD USER */}

      {userModal && (
        <div
          className={`z-10 fixed w-full screen_height top-0 right-0 overflow-x-hidden left-0 backdrop_bg rm_scroll ${
            scroll ? "overflex-y-scroll" : "overflow-y-hidden"
          } ${flex && "flex justify-center items-center"}`}
          onClick={handleClickOutside}
        >
          {showUserCreate ? (
            <UserCreate
              setScroll={setScroll}
              setShowUserCreate={setShowUserCreate}
              setFlex={setFlex}
              setUserModal={setUserModal}
              selectedRole={selectedRole}
            />
          ) : (
            <AddNewUserModal
              setUserModal={setUserModal}
              setScroll={setScroll}
              setFlex={setFlex}
              setShowUserCreate={setShowUserCreate}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
            />
          )}
        </div>
      )}

      {/* DELETED POSTS */}

      {showDeletedPost && (
        <div
          className="z-10 fixed w-full screen_height top-0 right-0 overflow-x-hidden left-0 backdrop_bg rm_scroll overflex-y-scroll"
          onClick={handleClickOutside}
        >
          <DeletedPost
            setShowDeletedPost={setShowDeletedPost}
            setScroll={setScroll}
          />
        </div>
      )}
    </Layout>
  );
};

export default AdminPage;
