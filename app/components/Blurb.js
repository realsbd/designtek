import Image from "next/image";
import Link from "next/link";

export default function Blurb(props) {
  return (
    <div className="">
      <div className="flex justify-center">
        <Link href={props.link} className="w-full">
          <Image
            src={props.img}
            width={500}
            height={227}
            alt="blurb"
            className="w-full"
          />
        </Link>
      </div>
      <div className="tracking-tighter">
        <Link href={props.link} className="text-justify">
          <h3 className="text-lg uppercase font-semibold my-3 hover:underline">
            {props.title}
          </h3>
        </Link>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
