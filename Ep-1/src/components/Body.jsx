import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import RestaurantCard from "./ResturentCard";
import ShimmerUi from "./ShimmerUi";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  const [filterRestaurantList, setFilterRestaurantList] = useState(null);
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  console.log(filterRestaurantList);

  const fetchSwiggyData = async () => {
    const res = await fetch(SWIGGY_API);
    const data = await res.json();

    const restaurantData =
      data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRestaurantList(restaurantData);
    setFilterRestaurantList(restaurantData);
  };

  useEffect(() => {
    fetchSwiggyData();
  }, []);

  if (filterRestaurantList === null) return <ShimmerUi />;

  const searchHandler = () => {
    const filterRes = restaurantList?.filter((item) =>
      item.info.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilterRestaurantList(filterRes);
  };

  const topRatedFilterHandler = () => {
    const filterRes = restaurantList?.filter(
      (item) => item.info.avgRating >= 4
    );
    setFilterRestaurantList(filterRes);
  };

  return (
    <div>
      <div className="search-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          onKeyUp={(e) => {
            if (e.key === "Enter") searchHandler();
          }}
        />
        <button onClick={searchHandler}>Search</button>
        <button onClick={topRatedFilterHandler}>Top Rated</button>
      </div>
      <div className="restaurant-component">
        {filterRestaurantList?.map((item) => {
          const data = item.info;
          return (
            <RestaurantCard
              img={data.cloudinaryImageId}
              name={data.name}
              rating={data.avgRating}
              key={data.id}
              costForTwo={data.costForTwo}
              deliveryTime={data.sla.slaString}
              onClick={() => {
                navigate("/restaurant/" + data.id);
                console.log(456)
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
