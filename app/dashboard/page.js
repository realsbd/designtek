"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";

import DashboardPostsTab from "../components/DashboardPostsTab";
import DashboardPostTab from "../components/DashboardPostTab";
import { useRouter, useSearchParams } from "next/navigation";
// import {useUser} from "@/app/hooks/useUser";
import { getPostsByUserId } from "@/lib/posts";

export default function Dashboard() {
  const router = useRouter()
  // const {user} = useUser();

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/login');
  //   }
  // }, [user, router]);

  const searchParams = useSearchParams();

  const [filter, setFilter] = useState("all");
  const [currentTab, setCurrentTab] = useState(searchParams.get("tab") || 1);
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const BASE_API = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  //Useeffect to fetch the posts anytime the page reloads
  useEffect(() => {
    //function to fetch posts for a particular contributor
    // const user = localStorage.getItem("user");
    // const userId = JSON.parse(user).userDetails._id;
    const fetchUserPosts = async () => {
      // setLoadingPosts(true);
      try {
        const res = await getPostsByUserId();

        if (!res.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }

        const data = await response.json();
        setLoadingPosts(false);
        setPosts(data);
      } catch (error) {
        console.log(error.message);
        setLoadingPosts(false);
      }
    };
    fetchUserPosts();
  }, []);

  useEffect(() => {
    handleTabChange(searchParams.get("tab") || 1);
  }, [searchParams, currentTab]);

  function formatCount(count) {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  }

  const blurbsData = [
    {
      link: "#",
      img: "/img/blurb-1.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Approved",
    },
    {
      link: "#",
      img: "/img/blurb-2.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Approved",
    },
    {
      link: "#",
      img: "/img/blurb-3.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Approved",
    },
    {
      link: "#",
      img: "/img/blurb-4.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Approved",
    },
    {
      link: "#",
      img: "/img/blurb-5.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Approved",
    },
    {
      link: "#",
      img: "/img/blurb-6.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Disapproved",
    },
    {
      link: "#",
      img: "/img/blurb-7.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Disapproved",
    },
    {
      link: "#",
      img: "/img/blurb-8.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Approved",
    },
    {
      link: "#",
      img: "/img/blurb-9.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Approved",
    },
    {
      link: "#",
      img: "/img/blurb-10.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Pending",
    },
    {
      link: "#",
      img: "/img/blurb-11.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Pending",
    },
    {
      link: "#",
      img: "/img/blurb-12.png",
      title: "When an unknown printer took a galley of type and scrambled",
      status: "Pending",
    },
  ];

  const filteredBlurbs = posts.filter((blurb) => {
    if (filter === "all") return true;
    return blurb.status === filter;
  });

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleTabChange = (value) => {
    setCurrentTab(value);
  };

  const showTab = (tab) => {
    switch (tab) {
      case 1:
        return (
          <DashboardPostsTab
            filter={filter}
            handleFilterChange={handleFilterChange}
            // handleTabChange={handleTabChange}
            formatCount={formatCount}
            filteredBlurbs={filteredBlurbs}
            loadingPosts={loadingPosts}
          />
        );
      case 2:
        return (
          <DashboardPostTab
            filter={filter}
            handleFilterChange={handleFilterChange}
            formatCount={formatCount}
            filteredBlurbs={filteredBlurbs}
          // handleTabChange={handleTabChange}
          />
        );
    }
  };

  return (
    <DashboardLayout>
      <div className="px-5 md:px-20">
        <div>{showTab(parseInt(currentTab))}</div>
      </div>
    </DashboardLayout>
  );
}
