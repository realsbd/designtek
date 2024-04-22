"use client";

import { useState } from "react";
import Image from "next/image";
import DashboardLayout from "@/app/components/Layout/DashboardLayout";
import BlogPostEditor from "@/components/TipTap";

export default function NewPost() {
  const [editOptions, setEditOptions] = useState(false);
  return (
    <DashboardLayout>
      <div className="bg-black flex justify-end w-full py-2 px-20">
        <div className="flex gap-3">
          <button onClick={() => setEditOptions(!editOptions)}>
            <Image
              src="/img/plus-circle.svg"
              width={24}
              height={24}
              alt="plus button"
            />
          </button>
          <button>
            <Image
              src="/img/settings.svg"
              width={24}
              height={24}
              alt="settings button"
            />
          </button>
          <button>
            <Image
              src="/img/edit.svg"
              width={24}
              height={24}
              alt="edit button"
            />
          </button>
          <button className="text-[#E8EDF4] hover:bg-[#E8EDF4] rounded-sm duration-300 hover:text-black text-sm px-4 py-1">
            Save as draft
          </button>
          <button className="bg-[#E8EDF4] text-black px-4 py-1 rounded-sm text-sm">
            submit
          </button>
        </div>
      </div>
      <div className="py-5 px-20 relative">
        <BlogPostEditor />
      </div>
    </DashboardLayout>
  );
}
