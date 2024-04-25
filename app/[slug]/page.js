"use client";

import PageLayout from "@/app/components/Layout/PageLayout";
import Image from "next/image";
import Reaction from "@/app/components/Reaction";
import AuthorCard from "@/app/components/AuthorCard";
import Comment from "@/app/components/Comment";
import Blurb from "@/app/components/Blurb";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

export default function Slug({ params }) {
  const slug = params.slug;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://fintech-blog-749ab6e21c45.herokuapp.com/posts/${slug}`
        );
        const post = await response.json();
        console.log(post);
        setPost(post);
      } catch (error) {
        // notFound()
        console.error("Error fetching post:", error);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <PageLayout>
      <div className="px-3">
        <div className="date mt-16">
          <p className="text-customBlue font-semibold">
            {formatDate(post?.createdAt)}
          </p>
        </div>
        <h1 className="capitalize my-6 font-bold text-4xl">{post?.title}</h1>
        <div className="mb-5">
          <Image
            src={post?.image}
            alt="blurb"
            width={966}
            height={482}
            className="w-full"
          />
          <p className="mt-8 text-justify">{post?.desc}</p>
        </div>
        <Reaction />
        <AuthorCard username={post?.author.username} role={post?.author.role} />
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
