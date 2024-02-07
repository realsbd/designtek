import PageLayout from '../components/Layout/PageLayout';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Comment from '../components/Comment';
import AuthorCard from '../components/AuthorCard';
import Reaction from "@/app/components/Reaction";
import Blurb from "@/app/components/Blurb";

export default function About() {

    const blurbsData = [
        {
            link: "#",
            img: "/img/blurb-1.png",
            text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
        },
        {
            link: "#",
            img: "/img/blurb-2.png",
            text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
        },
        {
            link: "#",
            img: "/img/blurb-3.png",
            text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into."
        },
    ]

    const blurbs = blurbsData.map(blurb => (
        <Blurb
            key={blurb.img}
            link={blurb.link}
            img={blurb.img}
            text={blurb.text}
        />
    ))
    return (
        <PageLayout>
            <div className="mx-auto">
                <Image src="/img/blurb-2.png" width={966} height={482} alt="blurb" className="mx-auto my-8 w-full" />
                <div className="">
                    <p className="text-green-400">20 Jan 2024</p>
                    <h1 className="text-3xl font-bold mt-5 mb-10">Latest Updates On The Financial Exchange Market</h1>
                    <article className="prose-lg">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                        <br />Lorem Ipsum
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        is simply dummy text of the printing and typesetting industry. <br />
                        Lorem Ipsum has been the industry&lsquo;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</article>
                    <Reaction />
                    <AuthorCard />
                </div>
                <Comment />
                <div className="flex flex-row gap-10 flex-wrap justify-center">
                    {blurbs}
                </div>
            </div>
        </PageLayout>
    )
}