import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blurb(props) {
  return (
    <div className="w-full">
      <div className="w-full">
        <Link href={props.link} className="w-full">
          <Image
            src={props.img}
            width={500}
            height={227}
            alt="blurb"
            className="w-full rounded-xl"
          />
        </Link>
      </div>
      <div>
        <Link href={props.link}>
          <h3 className="text-2xl font-semibold my-3 hover:underline">
            {props.title}
          </h3>
        </Link>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
