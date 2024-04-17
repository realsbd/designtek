"use client";

import { useState } from "react";
import Layout from "../components/admin/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../components/Pagination";

const AdminPage = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [userModal, setUserModal] = useState(false);

  const handleUserChange = (value) => {
    console.log(value);
    if (value === "add-new-user") {
    }
  };

  return (
    <Layout>
      <div className="mt-10">
        <h1 className="text-2xl">Admin Dashboard</h1>
        <div className="mt-5 flex flex-wrap-reverse gap-2 justify-between items-center w-full">
          <div className="overflow-auto py-1">
            <div className="flex gap-4 items-center max-[847px]:w-[700px] text-[13px]">
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
            </div>
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
                id="username"
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
            <div className="flex gap-2">
              <input type="checkbox" id="select" />
              <label htmlFor="select">Select</label>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" id="multiple-selection" />
              <label htmlFor="multiple-selection">Multiple selection</label>
            </div>
          </div>
        </div>

        <div className="h-full w-full bg-admin-red-0 p-5 md:p-10">
          <h2 className="mb-5 text-xl">All users(300)</h2>

          <div className="overflow-auto">
            <table className="w-full text-left admin-container max-[919px]:w-[900px] text-sm">
              <thead className="font-medium">
                <tr>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Posts</th>
                  <th>2FA Status</th>
                  <th>Last Login</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Valeta Squad</td>
                  <td>David Bolanle</td>
                  <td>davidbolanle08@gmail.com</td>
                  <td>Editor</td>
                  <td>232</td>
                  <td>Verified</td>
                  <td>6 min ago</td>
                </tr>
                <tr>
                  <td>Valeta Squad</td>
                  <td>David Bolanle</td>
                  <td>davidbolanle08@gmail.com</td>
                  <td>Editor</td>
                  <td>232</td>
                  <td>Verified</td>
                  <td>6 min ago</td>
                </tr>
                <tr>
                  <td>Valeta Squad</td>
                  <td>David Bolanle</td>
                  <td>davidbolanle08@gmail.com</td>
                  <td>Editor</td>
                  <td>232</td>
                  <td>Verified</td>
                  <td>6 min ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="my-3">
          <Pagination />
        </div>
      </div>

      {}
    </Layout>
  );
};

export default AdminPage;
