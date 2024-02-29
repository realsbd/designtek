import Image from "next/image";

export default function SignalBlurb(props) {
  return (
    <div className="mt-3">
      <h2 className="my-3 font-bold text-3xl">{props.title}</h2>
      <Image
        src={props.img}
        alt="blurb"
        width={966}
        height={482}
        className="mx-auto"
      />
      <p className="mt-8">{props.text}</p>
    </div>
  );
}
