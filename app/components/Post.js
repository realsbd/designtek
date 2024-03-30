import Image from "next/image";
import Link from "next/link";

const Post = (props) => {
  return (
    <Link href={`${props.status === "disapproved" ? "dashboard?tab=2" : ""}`}>
      <div className="flex justify-center">
        <div className="w-full rounded-lg overflow-hidden">
          <Image
            src={props.img}
            width={500}
            height={227}
            alt="blurb"
            className="w-full"
          />
        </div>
      </div>
      <div className="tracking-tighter">
        <h3 className="text-sm my-3 hover:underline">{props.title}</h3>

        <p>{props.text}</p>
      </div>
    </Link>
  );
};

export default Post;
