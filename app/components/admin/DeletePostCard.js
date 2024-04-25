import Image from "next/image";

const DeletePostCard = ({ post }) => {
  return (
    <div className="flex gap-2 sm:gap-5">
      <div className="w-full">
        <div className="flex justify-between flex-wrap items-center">
          <h2 className="text-xl">{post.title}</h2>
          <p className="text-[13px]">{post.date}</p>
        </div>

        <div className="mt-2 border border-solid border-gray-shade-300 rounded-lg w-full max-h-[528px] overflow-auto p-3">
          <p className="text-justify">{post.text}</p>
        </div>
      </div>
      <div className="flex flex-col gap-9">
        <button className="w-10 h-10 flex justify-center items-center rounded-md bg-admin-red-5">
          <Image
            src="/img/trash.svg"
            width={24}
            height={24}
            className="w-6 h-6"
            alt="delete button"
          />
        </button>
        <button className="w-10 h-10 flex justify-center items-center rounded-md bg-primary-green">
          <Image
            src="/img/refresh.svg"
            width={24}
            height={24}
            className="w-6 h-6"
            alt="delete button"
          />
        </button>
      </div>
    </div>
  );
};

export default DeletePostCard;
