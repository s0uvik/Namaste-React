import { useParams } from "react-router-dom";
import ShimmerUi from "../components/ShimmerUi";
import useFetchResInfo from "../utils/hooks/useFetchResInfo";
import ResMenuCategory from "../components/ResMenuCategory";
import { useState } from "react";

function RestaurantMenu() {
  const [showIndex, setShowIndex] = useState(null);

  const { id } = useParams();

  const resInfo = useFetchResInfo(id);

  const data = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  const resInformation = data?.cards[2]?.card?.card?.itemCards;

  const category = data?.cards.filter((c) => {
    return (
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  // console.log(category);

  if (resInfo === null) return <ShimmerUi />;

  return (
    <div className=" mt-5 flex flex-col items-center ">
      <h1 className=" self-center text-3xl">
        {resInfo?.cards[0]?.card?.card?.info.name}
      </h1>
      <h2 className=" self-center">
        {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}
      </h2>
      <h2 className=" self-center font-semibold text-lg">Menu</h2>

      {category?.map((item, index) => {
        return (
          <ResMenuCategory
            showMenus={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            data={item.card.card}
          />
        );
      })}
    </div>
  );
}

export default RestaurantMenu;
