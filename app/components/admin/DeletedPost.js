import { useEffect, useState } from "react";
import CloseButton from "./CloseButton";
import Image from "next/image";
import DeletePostCard from "./DeletePostCard";

const posts = [
  {
    title: "When Bitcoin Begun in the Mid 20’s.",
    text: "Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership. Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership. Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership. Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership.",
    date: "12-January-2024",
  },
  {
    title: "USD Market Price Ranges Above Overbought.",
    text: "Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership. Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership. Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership. Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership.",
    date: "11-January-2024",
  },
  {
    title: "When Bitcoin Begun in the Mid 20’s.",
    text: "Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership. Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership. Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership. Aisha Akintola, born in 1980, is a Stanford-educated writer known for her evocative short stories, notably in the acclaimed collection 'Echoes of Silence' (2010). With a minimalist style and a commitment to diverse storytelling, Rodriguez explores the intricacies of human relationships, making a lasting impact on the literary landscape. Her work reflects a unique blend of profound insight and concise prose, resonating with a wide readership.",
    date: "12-January-2024",
  },
];

const DeletedPost = ({ setShowDeletedPost, setScroll }) => {
  const [slideIn, setSlideIn] = useState(false);

  const handleCloseDelete = () => {
    setShowDeletedPost(false);
    setScroll(false);
  };

  useEffect(() => {
    setSlideIn(true);
    return () => setSlideIn(false);
  }, []);

  return (
    <div
      className={`profile-edit w-[90%]relative lg:max-w-[1118px] min-h-screen ml-auto bg-white transition-transform duration-300 transform ${
        slideIn ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CloseButton onClose={handleCloseDelete} />
      <div className="py-10 px-3 sm:px-10 md:px-[100px] md:py-[100px]">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
          <Image
            src="/img/david-delete.png"
            width={100}
            height={100}
            className="w-full h-full"
            alt="deleted post author"
          />
        </div>
        <p className="text-2xl font-medium my-10">
          David Bolanle&apos;s Profile
        </p>

        <h1 className="text-xl font-medium">Total Deleted Posts (32)</h1>

        <div className="mt-10 flex flex-col gap-14">
          {posts.map((post, index) => (
            <DeletePostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeletedPost;
