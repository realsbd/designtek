import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const PostsTable = ({
  data,
  isSelectionMode,
  toggleUserSelection,
  userSelection,
  setShowDeletedPost,
}) => {
  const handleViewDeletedPost = (id) => {
    console.log("clicked", id);
    setShowDeletedPost(true);
  };
  return (
    <table className="w-full text-left admin-container max-[919px]:w-[900px] text-sm">
      <thead className="font-medium">
        <tr>
          {data.columns &&
            data.columns.map((column, index) => <th key={index}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.users &&
          data.users.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-2">
                  {isSelectionMode && (
                    <button onClick={() => toggleUserSelection(index)}>
                      <Image
                        src={
                          userSelection[index]
                            ? "/img/check-box.svg"
                            : "/img/uncheck-box.svg"
                        }
                        width={24}
                        height={24}
                        className="w-6 h-6"
                        alt="check"
                      />
                    </button>
                  )}
                  {item.username}
                </div>
              </td>
              <td>{item.name}</td>
              <td>{item.posts}</td>
              <td>{item.role}</td>
              <td>{item.recentDate}</td>
              <td>{item.time}</td>
              <td>{item.reason}</td>
              <td>
                <button onClick={() => handleViewDeletedPost(index)}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default PostsTable;
