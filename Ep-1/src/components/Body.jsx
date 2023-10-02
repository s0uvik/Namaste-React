import { useContext, useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import RestaurantCard, { withPromoted } from "./ResturentCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import ShimmerUi from "./ShimmerUi";
import UserContext from "../utils/context";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  const [filterRestaurantList, setFilterRestaurantList] = useState(null);
  const [input, setInput] = useState("");
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

  if (useOnlineStatus() === false)
    return <h1>no internet!!!, check your internet connection</h1>;

  if (!filterRestaurantList) return <ShimmerUi />;

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

  const RestaurantWithPromoted = withPromoted(RestaurantCard);

  const {loggedInUser, setUserName} = useContext(UserContext)
  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center">
      <div className=" flex mt-8 gap-4">
        <input
          className=" border-2 border-black rounded-md pl-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          onKeyUp={(e) => {
            if (e.key === "Enter") searchHandler();
          }}
        />
        <button
          className=" bg-red-500 px-2 rounded text-white"
          onClick={searchHandler}
        >
          Search
        </button>
        <button
          className=" bg-green-500 px-2 rounded text-white"
          onClick={topRatedFilterHandler}
        >
          Top Rated
        </button>
        <input
          className=" border-2 border-black rounded-md pl-2"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          
        />
      </div>
      <div className=" flex gap-4 flex-wrap justify-center">
        {filterRestaurantList?.map((item) => {
          const data = item.info;
          return (
            <Link to={"/restaurant/" + data.id}>
              {data.isOpen ? (
                <RestaurantWithPromoted
                  img={data.cloudinaryImageId}
                  name={data.name}
                  rating={data.avgRating}
                  key={data.id}
                  costForTwo={data.costForTwo}
                  deliveryTime={data.sla.slaString}
                />
              ) : (
                <RestaurantCard
                  img={data.cloudinaryImageId}
                  name={data.name}
                  rating={data.avgRating}
                  key={data.id}
                  costForTwo={data.costForTwo}
                  deliveryTime={data.sla.slaString}
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
