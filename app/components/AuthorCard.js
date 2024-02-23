import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="flex items-center mb-10 mt-3 gap-3">
      <div className="w-[53px] h-[53px] rounded-full overflow-hidden bg-black flex justify-center items-center">
        <Image src="/img/author.jpg" width={500} height={500} alt="Author" />
      </div>
      <div>
        <h2 className="text-xl font-normal">David Nelson</h2>
        <p className="font-light">Copy Writer</p>
      </div>
    </div>
  );
}
