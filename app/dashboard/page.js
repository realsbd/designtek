"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "../components/Layout/DashboardLayout";
import NavDashboard from "@/components/NavDashboard";

import DashboardPostsTab from "../components/DashboardPostsTab";
import DashboardPostTab from "../components/DashboardPostTab";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState("all");
  const [currentTab, setCurrentTab] = useState(searchParams.get("tab") || 1);

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
  ];

  const filteredBlurbs = blurbsData.filter((blurb) => {
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
