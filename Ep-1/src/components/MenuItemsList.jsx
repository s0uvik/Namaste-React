import React from "react";
import { IMAGE_MEDIA } from "../utils/constants";

const MenuItemsList = ({ item }) => {

  return (
    <>
      {item?.map((item) => {
        return (
          <div className=" border-b-2 m-1 p-1 mt-4 flex justify-between ">
            <div>
              <div className="  text-base ">
                <h1>{item.card?.info?.name}</h1>
                <span>₹{item.card?.info?.price / 100}</span>
              </div>
              <p className=" text-sm text-gray-400">
                {item.card?.info?.description}
              </p>
            </div>
            {item.card?.info?.imageId && <img
              className=" w-24 h-24 object-cover"
              src={IMAGE_MEDIA + item.card?.info?.imageId}
              alt=""
            />}
          </div>
        );
      })}
    </>
  );
};

export default MenuItemsList;
