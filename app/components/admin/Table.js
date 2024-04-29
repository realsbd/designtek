import Image from "next/image";

const Table = ({ data, isSelectionMode, toggleUserSelection }) => {
  return (
    <table className="w-full text-left admin-container max-[919px]:w-[900px] text-sm">
      <thead className="font-medium">
        <tr>
          {data.column &&
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
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.posts}</td>
              <td>{item.status}</td>
              <td>{item.duration}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
