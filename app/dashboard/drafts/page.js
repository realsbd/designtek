"use client";

import React, { useState } from "react";
import DashboardLayout from "@/app/components/Layout/DashboardLayout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const DraftPage = () => {
  // State to manage which draft is being hovered on
  const [hoveredDraft, setHoveredDraft] = useState(null);

  // Handler for mouse enter event
  const handleMouseEnter = (index) => {
    setHoveredDraft(index);
  };

  // Handler for mouse leave event
  const handleMouseLeave = () => {
    setHoveredDraft(null);
  };

  // Handler for delete button click
  const handleDelete = (index) => {
    // Logic to delete the draft
    console.log("Deleting draft at index:", index);
  };

  // Sample drafts data
  const drafts = [
    {
      title: "The reason why USD is weak",
      description:
        "The United State of America is running on the high side of the hill and Donald, the former president is working",
      date: "15 May 2024",
    },
    {
      title: "The reason why USD is weak",
      description:
        "The United State of America is running on the high side of the hill and Donald, the former president is working",
      date: "15 May 2024",
    },
    {
      title: "The Forex Market Pairs Are All Going Bullish",
      description:
        "The United State of America is running on the high side of the hill and Donald, the former president is working",
      date: "15 May 2024",
    },
    {
      title: "The Forex Market Pairs Are All Going Bullish",
      description:
        "The United State of America is running on the high side of the hill and Donald, the former president is working",
      date: "15 May 2024",
    },
  ];

  return (
    <DashboardLayout>
      <section className="px-5 md:px-20 pb-10">
        <div className="mb-5">
          <h1 className="text-[25px] font-medium">Drafts</h1>
          <p className="text-sm text-gray-shade-30">
            Your creative write ups are saved here
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {/* Drafts */}

          <div className="flex flex-col">
            {drafts.map((draft, index) => (
              <div
                key={index}
                className={`py-3 border-b border-solid border-gray-shade-20 flex flex-col xl:flex-row justify-between ${
                  hoveredDraft === index ? "bg-gray-shade-20 px-3" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/dashboard/add-post">
                  <h2 className="text-lg font-medium mb-3">{draft.title}</h2>
                  <p className="text-sm">{draft.description}</p>
                </Link>
                <div className="flex items-end">
                  {hoveredDraft === index ? (
                    <button onClick={() => handleDelete(index)}>
                      <FontAwesomeIcon icon={faTrashCan} className="w-6 h-6" />
                    </button>
                  ) : (
                    <p className="text-[10px]">{draft.date}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default DraftPage;
