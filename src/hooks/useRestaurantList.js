import { useEffect } from "react";
import { useState } from "react";
import { restListNew } from "../utils/common";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
//   const [searchFilter,setSearchFilter] = useState([]);

  useEffect(() => {
    fetchRestaurantLists();
  }, []);

  const fetchRestaurantLists = async () => {
    const data = await fetch(restListNew);
    const json = await data.json();
    let checkData =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
    setRestaurantList(checkData);
    // setSearchFilter(checkData)
  };
  return restaurantList;
};
export default useRestaurantList;
