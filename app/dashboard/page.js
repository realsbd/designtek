import DashboardLayout from '../components/Layout/DashboardLayout'
import NavDashboard from "@/components/NavDashboard";
import Blurb from "@/app/components/Blurb";


export default function Dashboard() {
    const blurbsData = [
        {
            link: "#",
            img: "/img/blurb-1.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-2.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-3.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-4.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-5.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-6.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-7.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-8.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-9.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-10.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-11.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
        {
            link: "#",
            img: "/img/blurb-12.png",
            title: "When an unknown printer took a galley of type and scrambled",
        },
    ]
    return (
        <DashboardLayout>
            <NavDashboard />
            <div className="flex flex-row flex-wrap justify-center">
                {blurbsData.map(blurb => (
                    <Blurb
                        key={blurb.title}
                        link={blurb.link}
                        img={blurb.img}
                        title={blurb.title}
                        text={blurb.text}
                    />
                ))}
            </div>
        </DashboardLayout>

    )
}