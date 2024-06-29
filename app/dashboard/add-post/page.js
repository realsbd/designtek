"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import DashboardLayout from "@/app/components/Layout/DashboardLayout";
import Tiptap from "@/components/TipTap";
import { useUser } from "@/app/hooks/useUser";
import { useRouter } from "next/navigation";
import { createPost, getCategories } from "@/lib/posts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function NewPost() {
  const { user } = useUser();
  const router = useRouter();

  const [editOptions, setEditOptions] = useState(false);
  const [content, setContent] = useState()
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const titleRef = useRef(null);
  const [featureImg, setFeatureImg] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // check if title is not empty
      const title = titleRef.current.value;
      if (!title || !content ||!selectedCategory ||!featureImg) {
        throw new Error('Please fill all the fields');
      }
      // set all data to object
      const data = {
        title,
        content,
        category: selectedCategory,
        featureImg,
      }

      // post data to api
      const response = await createPost(data);
      console.log("response:", response);
      // console.log("title:", title, "content:", content, "category:", selectedCategory, "featureImg:", featureImg);
    } catch (error) {
      console.error('Error submitting post:', error);

    }

  }

  const handleContentChange = (e) => {
    setContent(e)
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };



  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
    // get list of categories
    async function fetchCategories() {
      try {
        // setIsLoading(true);
        const response = await fetch("https://fintech-blog-749ab6e21c45.herokuapp.com/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }

    fetchCategories();

  }, [user, router]);
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
          <button className="bg-[#E8EDF4] text-black px-4 py-1 rounded-sm text-sm" type="submit" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </div>
      <div
        className="w-2/3 grid place-items-center mx-auto pt-10 mb-10"
      >
        <div className="text-3xl text-center text-sky-300 mb-10">
          Add a New Post
        </div>

        <label>
          <span>Upload a file</span>
          <input type="file" name="featureImg" accept="image/*" onChange={(e) => setFeatureImg(e.target.files[0])} />
        </label>
        <input name="title" type="text" placeholder="Title" ref={titleRef} className="w-full px-4 py-2 rounded-sm border-2 border-gray-700 mb-5" />
        {/* select categories here  */}
        <label>
          Select a Category:
          <select name="selectedFruit" onChange={handleCategoryChange}>
            {Array.isArray(categories) && categories.map((category) => (
              <option key={category._id} value={category.title}>{category.title}</option>
            ))}

          </select>
        </label>
        <Tiptap content={content}
          onChange={(newContent) => handleContentChange(newContent)}
        />

      </div>
    </DashboardLayout>
  );
}