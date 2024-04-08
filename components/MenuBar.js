"use client";

import { useState } from "react";
import Blocks from "./Blocks";
import Patterns from "./Patterns";
import Tags from "./Tags";

const MenuBar = ({ editor }) => {
  const [currentMenu, setCurrentMenu] = useState("block"); // State to control the menu option as stated below

  //   In order to control which menu option to show either the block, pattern or tags
  const showMenu = (menu) => {
    switch (menu) {
      case "block":
        return <Blocks editor={editor} />;
      case "pattern":
        return <Patterns editor={editor} />;
      case "tag":
        return <Tags editor={editor} />;
    }
  };

  if (!editor) {
    return null;
  }

  return <div className="p-8">{showMenu(currentMenu)}</div>;
};

export default MenuBar;
