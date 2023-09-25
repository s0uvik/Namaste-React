import { useState } from "react";

const useFetchResInfo = (id) => {
  const [menus, setMenus] = useState(null);

  const fetchResInfo = async () => {
    const res = await fetch(RESTAURANTS_DATA_API + id);
    const data = await res.json();

    setMenus(data?.data);
  };

  useEffect(() => {
    fetchResInfo();
  }, []);

  return menus;
};

export default useFetchResInfo;
