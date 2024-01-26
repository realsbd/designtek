import PageLayout from '../components/Layout/PageLayout';
import Navbar from '../components/Navbar';
// import FooterSection from '../components/FooterSection';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Comment from '../components/Comment';
import AuthorCard from '../components/AuthorCard';

export default function About() {
    return (
        <PageLayout>
            <div className="mx-auto">
                <Image src="/img/blurb-2.png" width={966} height={482} alt="blurb" className="mx-auto my-8 w-full" />
                <div className="">
                    <p className="text-green-400">20 Jan 2024</p>
                    <h1 className="text-3xl font-bold mt-5 mb-10">Latest Updates On The Financial Exchange Market</h1>
                    <article className="prose-lg">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                        <br />Lorem Ipsum
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        is simply dummy text of the printing and typesetting industry. <br />
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</article>
                    <div className="flex justify-left my-8 gap-4">
                        <div className="flex gap-3 items-center my-2">
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <p>25</p>
                        </div>
                        <div className="flex gap-3 items-center my-2">
                            <FontAwesomeIcon icon={faHeart} />
                            <p>3.1k</p>
                        </div>
                    </div>
                    <AuthorCard />
                </div>
                <Comment />
            </div>
        </PageLayout>
    )
}