import React, { useEffect, useState } from "react";
import { RESTAURANTS_DATA_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerUi from "../components/ShimmerUi";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  const { id } = useParams();

  const fetchResInfo = async () => {
    const res = await fetch(RESTAURANTS_DATA_API + id);
    const data = await res.json();

    setResInfo(data?.data);
  };

  useEffect(() => {
    fetchResInfo();
  }, []);

  if (resInfo === null) return <ShimmerUi />;

  return (
    <center>
      <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
      <h2>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h2>
      <h2>Menu</h2>
      <ul>
        {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
          (item) => {
            return <li>{item.card}</li>;
          }
        )}
      </ul>
    </center>
  );
}

export default RestaurantMenu;
