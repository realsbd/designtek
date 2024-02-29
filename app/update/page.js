"use client";

import PageLayout from "@/app/components/Layout/PageLayout";
import Image from "next/image";
import SignalBlurb from "@/app/components/SignalBlurb";
import Reaction from "@/app/components/Reaction";
import AuthorCard from "@/app/components/AuthorCard";
import Comment from "@/app/components/Comment";
import Blurb from "@/app/components/Blurb";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

export default function Update() {
  const blurbsData = [
    {
      title: "Is EUR/USD bank on a free fall?",
      img: "/img/blurb-2.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      title: "Is EUR/USD bank on a free fall?",
      img: "/img/blurb-1.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
    {
      title: "Is EUR/USD bank on a free fall?",
      img: "/img/blurb-3.png",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
  ];

  const blurbs = blurbsData.map((blurb) => (
    <SignalBlurb
      key={blurb.img}
      img={blurb.img}
      title={blurb.title}
      text={blurb.text}
    />
  ));

  const recentPost = [
    {
      link: "#",
      img: "/img/blurb-1.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.",
    },
    {
      link: "#",
      img: "/img/blurb-2.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.",
    },
    {
      link: "#",
      img: "/img/blurb-3.png",
      title: "When an unknown printer took a galley of type and scrambled",
      text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.",
    },
  ];

  const recent = recentPost.map((blurb) => (
    <Blurb
      key={blurb.img}
      link={blurb.link}
      img={blurb.img}
      title={blurb.title}
      text={blurb.text}
    />
  ));

  return (
    <PageLayout>
      <div className="px-3">
        <div className="date mt-16">
          <p className="text-customBlue font-semibold">20. Jan, 2024</p>
        </div>
        <h1 className="my-6 font-bold text-4xl">
          Latest Updates On The Financial Exchange Market
        </h1>
        <div className="mb-5">
          <Image
            src="/img/blurb-2.png"
            alt="blurb"
            width={966}
            height={482}
            className="mx-auto"
          />
          <p className="mt-8 text-justify">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into.is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry&lsquo;s
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries.
          </p>
        </div>
        <div>{blurbs}</div>
        <Reaction />
        <AuthorCard />
        <Comment />

        <div
          id="recent"
          className="grid lg:grid-cols-3 gap-5 my-5 grid-cols-1 md:grid-cols-2"
        >
          {recent}
        </div>
      </div>
      <ScrollToTopButton />
    </PageLayout>
  );
}
