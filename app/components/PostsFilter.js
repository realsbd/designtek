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
      <div className={"flex flex-wrap gap-5 w-full items-center"}>
        <div
          onClick={() => {
            handleFilterChange("all");
          }}
          className={`flex items-center cursor-pointer ${
            filter === "all" ? "text-primary-green" : "text-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faBars} />
          <div className={"pl-2"}>All posts</div>
        </div>
        <div
          onClick={() => {
            handleFilterChange("Approved");
          }}
          className={`flex items-center cursor-pointer ${
            filter === "Approved" ? "text-primary-green" : "text-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faCircleCheck} />
          <div className={"pl-2"}>Approved posts</div>
        </div>
        <div
          onClick={() => {
            handleFilterChange("Pending");
          }}
          className={`flex items-center cursor-pointer ${
            filter === "Pending" ? "text-primary-green" : "text-gray-700"
          }`}
        >
          <FontAwesomeIcon icon={faClock} />
          <div className={"pl-2"}>Pending posts</div>
        </div>
        <div
          onClick={() => {
            handleFilterChange("Disapproved");
          }}
          className={`flex items-center cursor-pointer ${
            filter === "Disapproved" ? "text-primary-green" : "text-gray-700"
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
