import {
  faBars,
  faCircleCheck,
  faCircleXmark,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostsFilter = ({ filter, handleFilterChange, handleTabChange }) => {
  return (
    <div>
      <div className={"flex flex-wrap gap-8 w-full items-center"}>
        <div
          onClick={() => {
            handleFilterChange("all");
          }}
          className={`flex items-center cursor-pointer ${
            filter === "all" ? "text-customBlue" : "text-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faBars} />
          <div className={"pl-2"}>All posts</div>
        </div>
        <div
          onClick={() => {
            handleFilterChange("published");
          }}
          className={`flex items-center cursor-pointer ${
            filter === "published" ? "text-customBlue" : "text-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
          <div className={"pl-2"}>Approved posts</div>
        </div>
        <div
          onClick={() => {
            handleFilterChange("pending");
          }}
          className={`flex items-center cursor-pointer ${
            filter === "pending" ? "text-customBlue" : "text-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faClock} />
          <div className={"pl-2"}>Pending posts</div>
        </div>
        <div
          onClick={() => {
            handleFilterChange("disapproved");
          }}
          className={`flex items-center cursor-pointer ${
            filter === "disapproved" ? "text-customBlue" : "text-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
          <div className={"pl-2"}>Disapproved posts</div>
        </div>
      </div>
    </div>
  );
};

export default PostsFilter;
