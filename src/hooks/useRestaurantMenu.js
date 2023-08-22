import { useEffect } from "react";
import { Restaurant_Menu_API } from "../utils/common";
import { useState } from "react";

const useRestaurantMenu = (restid) => {
  const [restaurantMenuInfo, setRestaurantMenuInfo] = useState(null);

  useEffect(() => {
    console.log("useRestuarantMenu render..");
    getRestaurantMenuAPI();
  },[]);
  const getRestaurantMenuAPI = async () => {
    const data = await fetch(Restaurant_Menu_API + restid);
    const json = await data.json();
    setRestaurantMenuInfo(json.data);
  };
  return restaurantMenuInfo;
};
export default useRestaurantMenu;
