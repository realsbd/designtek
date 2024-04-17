import Image from "next/image";

export default function AuthorCard({ user }) {
  return (
    <div className="flex items-center mb-10 mt-3 gap-3">
      <div className="w-[53px] h-[53px] rounded-full overflow-hidden flex justify-center items-center">
        <Image src="/img/author.jpg" width={500} height={500} alt="Author" />
      </div>
      <div className="text-black">
        <h2 className="text-xl font-normal capitalize">{user.username}</h2>
        <p className="font-light capitalize">{user.role}</p>
      </div>
    </div>
  );
}
