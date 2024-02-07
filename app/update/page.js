import PageLayout from "@/app/components/Layout/PageLayout";
import Image from "next/image";
import SignalBlurb from "@/app/components/SignalBlurb";
import Reaction from "@/app/components/Reaction";
import AuthorCard from "@/app/components/AuthorCard";
import Comment from "@/app/components/Comment";
import Blurb from "@/app/components/Blurb";

export default function Update() {

    const blurbsData = [
        {
            title: "Is EUR/USD bank on a free fall?",
            img: "/img/blurb-2.png",
            text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            title: "Is EUR/USD bank on a free fall?",
            img: "/img/blurb-1.png",
            text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
        {
            title: "Is EUR/USD bank on a free fall?",
            img: "/img/blurb-3.png",
            text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
        },
    ]

    const blurbs = blurbsData.map(blurb => (
        <SignalBlurb
            key={blurb.img}
            img={blurb.img}
            title={blurb.title}
            text={blurb.text}
        />
    ))
    return(
        <PageLayout>
            <div className="mx-auto w-4/5">
                <div className="date mt-16">
                    <p className="text-customBlue font-semibold">20. Jan, 2024</p>
                </div>
                <h1 className="my-6 font-bold text-4xl">Latest Updates On The Financial Exchange Market</h1>
                <div className="mb-5">
                    <Image src="/img/blurb-2.png" alt="blurb" width={1200} height={500} />
                    <p className="mt-8">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </div>
                <SignalBlurb />
                <Reaction />
                <AuthorCard />
                <Comment />
                {blurbs}
            </div>
        </PageLayout>
    )
}