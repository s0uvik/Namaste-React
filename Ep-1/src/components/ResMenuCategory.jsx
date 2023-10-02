import React, { useState } from "react";
import MenuItemsList from "./MenuItemsList";

const ResMenuCategory = ({ data, showMenus, setShowIndex }) => {
  // const [showMenus, setShowMenus] = useState(false);

  return (
    <div className=" w-full sm:w-[500px] md:w-[700px] cursor-pointer  m-2 p-2 shadow-md bg-gray-100">
      <div
        className=" flex justify-between"
        onClick={() => setShowIndex()}
      >
        <span className=" text-lg font-semibold">{data.title} ({data.itemCards.length})</span>
        <span>{showMenus ? "⬆️" : "⬇️"}</span>
      </div>
      {showMenus && <MenuItemsList item={data.itemCards} />}
    </div>
  );
};

export default ResMenuCategory;
