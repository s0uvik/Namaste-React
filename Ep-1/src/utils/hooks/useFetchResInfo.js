import { useState, useEffect } from "react";
import { RESTAURANTS_DATA_API } from "../constants";

const useFetchResInfo = (id) => {
  const [menus, setMenus] = useState(null);

  const fetchResInfo = async () => {
    const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2616066&lng=87.8487286&restaurantId=${id}`);
    const data = await res.json();

    setMenus(data?.data)
  };

  useEffect(() => {
    fetchResInfo();
  }, []);

  return menus;
};

export default useFetchResInfo;
