"use client";

import { useState } from "react";
import PostsFilter from "./PostsFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Post from "./Post";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DashboardPostsTab = ({
  filter,
  handleFilterChange,
  formatCount,
  filteredBlurbs,
  handleTabChange,
}) => {
  const [showStatistics, setShowStatistics] = useState(false);

  const toggleStatistics = () => {
    setShowStatistics(!showStatistics);
  };

  return (
    <div>
      <div className="flex gap-10 md:gap-20 flex-col pb-10 md:pb-0 md:flex-row">
        <div className="flex flex-col justify-center w-full">
          {/*<FilterPosts />*/}

          <div>
            <PostsFilter
              filter={filter}
              handleFilterChange={handleFilterChange}
              handleTabChange={handleTabChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <h2 className={"my-8 mx-3 text-2xl text-gray-700"}>
              All Posts ({formatCount(filteredBlurbs.length)})
            </h2>

            <div className="flex items-center border border-solid border-gray-300 rounded-lg overflow-hidden px-3 py-1">
              <input
                type="text"
                name="search"
                placeholder="Search posts"
                className="outline-none text-sm w-full"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#63E6BE" }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 my-5 grid-cols-1 max-lg:px-5">
            {filteredBlurbs.map((blurb, index) => (
              <Post
                key={index}
                link={blurb.link}
                img={blurb.img}
                title={blurb.title}
                status={blurb.status}
                handleTabChange={handleTabChange}
              />
            ))}
          </div>
        </div>

        <div className="md:mt-20 text-gray-shade-30">
          <h1 className="text-xl text-black">Statistics</h1>
          <div className="border-2 border-solid border-gray-shade-25 rounded-lg p-3 mt-3">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2 border-b border-solid border-gray-shade-25 pb-3">
                <h2 className="text-sm">Threshold</h2>
                <p className="text-[10px]">
                  The green becomes full when you meet 1k views and 200
                  engagements
                </p>

                <div className="w-full h-2 rounded-lg bg-gray-shade-20">
                  <div className="w-10 bg-primary-green h-full rounded"></div>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-b border-solid border-gray-shade-25 pb-3">
                <h2 className="text-sm">Profile Visitors</h2>
                <div className="flex justify-between items-center">
                  <p className="text-[10px]">
                    This are the number of people that has opened or read your
                    blog posts
                  </p>
                  <p className="text-2xl font-semibold">21k</p>
                </div>
                <div>
                  <Select className="outline-primary-green">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2 pb-3">
                <h2 className="text-sm">Engagements</h2>
                <div className="flex justify-between items-center">
                  <p className="text-[10px]">
                    This includes your likes, comments, bookmarks and shares
                  </p>
                  <p className="text-2xl font-semibold">300</p>
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="w-full outline-primary-green">
                      <SelectValue placeholder="Choose time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPostsTab;
