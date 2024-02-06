import PageLayout from "@/app/components/Layout/PageLayout";
import Image from "next/image";

export default function About() {
    return (
        <PageLayout>
            <Image src="/img/unsplash.png" className="mt-10 mx-auto" alt="about us page" sizes="100%" width={1200} height={500}/>
        </PageLayout>
    )
}