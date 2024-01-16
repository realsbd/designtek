import Image from "next/image";
import Blurb from "./Blurb";
export default function Comment() {

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
        <div className="w-full mx-auto">
            <h2 className="text-3xl font-bold my-10">Share your thoughts!</h2>
            <div className="flex gap-4 w-full justify-space-between mx-auto justify-center mb-10">
                <form className="w-2/3">
                    <div class="flex flex-col gap-6">
                        <div className="flex w-auto gap-2">
                            <label class="block flex-1">
                                <span class="text-gray-700">Full name</span>
                                <input
                                    type="text"
                                    class="mt-1 block w-full flex-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                    placeholder=""
                                />
                            </label>
                            <label class="block flex-1">
                                <span class="text-gray-700">Email address</span>
                                <input
                                    type="email"
                                    class="mt-1 block w-full flex-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                    placeholder="john@example.com"
                                />
                            </label>
                        </div>
                        <label class="block">
                            <span class="text-gray-700">Write your comment here...</span>
                            <textarea
                                class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                                rows="7"
                            ></textarea>
                        </label>
                    </div>
                    <button type="submit" className="bg-gray-200 p-3 w-full rounded mt-4">Submit</button>
                </form>
                <Image src="/img/cta.jpg" width={245} height={406} className="rounded" alt="cta" />
            </div>
            <div className="flex flex-row gap-10 flex-wrap justify-center">
                {blurbs}
            </div>
        </div>
    )
}