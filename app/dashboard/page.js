"use client"
import DashboardLayout from '../components/Layout/DashboardLayout'
import NavDashboard from "@/components/NavDashboard";
import Blurb from "@/app/components/Blurb";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCircleCheck, faCircleXmark, faClock} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";


export default function Dashboard() {

    const [filter, setFilter] = useState('all');

    function formatCount(count){
        if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}k`
        }
        return count
    }


    const blurbsData = [
        {
            link: "#",
            img: "/img/blurb-1.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "published",
        },
        {
            link: "#",
            img: "/img/blurb-2.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "published",
        },
        {
            link: "#",
            img: "/img/blurb-3.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "published",
        },
        {
            link: "#",
            img: "/img/blurb-4.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "published",
        },
        {
            link: "#",
            img: "/img/blurb-5.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "published",
        },
        {
            link: "#",
            img: "/img/blurb-6.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "disapproved",
        },
        {
            link: "#",
            img: "/img/blurb-7.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "disapproved",
        },
        {
            link: "#",
            img: "/img/blurb-8.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "published",
        },
        {
            link: "#",
            img: "/img/blurb-9.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "published",
        },
        {
            link: "#",
            img: "/img/blurb-10.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "pending",
        },
        {
            link: "#",
            img: "/img/blurb-11.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "pending",
        },
        {
            link: "#",
            img: "/img/blurb-12.png",
            title: "When an unknown printer took a galley of type and scrambled",
            status: "pending",
        },
    ]

    const filteredBlurbs = blurbsData.filter(blurb => {
        if (filter === 'all') return true
        return blurb.status === filter
    })
    return (
        <DashboardLayout>
            <NavDashboard />
            <div className="flex flex-col justify-center">
                {/*<FilterPosts />*/}
                <div className={'flex flex-wrap justify-between items-center m-3'}>
                    <div onClick={() => setFilter('all')} className={`flex items-center cursor-pointer ${filter === 'all' ? 'text-customBlue' : 'text-gray-700'}`}>
                        <FontAwesomeIcon icon={faBars} />
                        <div className={'pl-2'}>All posts</div>
                    </div>
                    <div onClick={() => setFilter('published')} className={`flex items-center cursor-pointer ${filter === 'published' ? 'text-customBlue' : 'text-gray-700'}`}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <div className={'pl-2'}>Approved posts</div>
                    </div>
                    <div onClick={() => setFilter('pending')} className={`flex items-center cursor-pointer ${filter === 'pending' ? 'text-customBlue' : 'text-gray-700'}`}>
                        <FontAwesomeIcon icon={faClock} />
                        <div className={'pl-2'}>Pending posts</div>
                    </div>
                    <div onClick={() => setFilter('disapproved')} className={`flex items-center cursor-pointer ${filter === 'disapproved' ? 'text-customBlue' : 'text-gray-700'}`}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                        <div className={'pl-2'}>Disapproved posts</div>
                    </div>
                </div>
                <h2 className={'my-8 mx-3 text-2xl text-gray-700'}>All Posts ({formatCount(filteredBlurbs.length)})</h2>
                <div className="flex flex-wrap">
                    {filteredBlurbs.map(blurb => (
                        <Blurb
                            key={blurb.title}
                            link={blurb.link}
                            img={blurb.img}
                            title={blurb.title}
                        />
                    ))}
                </div>
            </div>
        </DashboardLayout>

    )
}