import React, { useState, useEffect } from "react";
import { restListNew } from "../utils/common";
import { FiSearch } from "react-icons/fi";
import Shimmer from "./Shimmer";
import RestaurantCardList, { withPromotedLable } from "./RestaurantCardList";


const Offers = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const RestaurantCardPromoted = withPromotedLable(RestaurantCardList);

   // initialize checkJsonData() function to check Swiggy Restaurant data
   const getRestaurantApi = async () => {
    try {
      const response = await fetch(restListNew);
      const json = await response.json();
      // console.log(json.data);
      let checkData =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantList(checkData);
      setSearchFilter(checkData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRestaurantApi();
  }, []);

 // Filter the restaurant data according input type
 const handleSearchClick = () => {
  const filterBySearch = restaurantList.filter((item) =>
    item.info.name.toLowerCase().includes(searchVal.toLowerCase())
  );
  setSearchFilter(filterBySearch);
};
// Filter the Top restaurant data according buttom type
const handleTopratingRestaurant = () => {
  const filterTopRatedRestaurant = restaurantList.filter(
    (res) => res.info.avgRating > 4
  );
  setSearchFilter(filterTopRatedRestaurant);
};
// Filter the below price data according buttom type
const handleBelowPrice = () => {
  setRestaurantList(restaurantList);
  const FindBelowPrice = restaurantList.filter(
    (res) => res?.info?.costForTwo < "₹300 for two"
  );
  // console.log(findPriceRange);
  setSearchFilter(FindBelowPrice);
};
// Filter the above price data according buttom type
const handleAbovePrice = () => {
  setRestaurantList(restaurantList);
  const findGreaterprice = restaurantList.filter(
    (res) => res?.info?.costForTwo >= "₹300 for two"
  );
  // console.log(findGreaterprice);
  setSearchFilter(findGreaterprice);
};

  return  restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='container mt-5'>
      <p>Home / Offers</p>
      <h1 className='offerTitle'>Restaurants With Great Offers Near Me</h1>
      <div className="row">
            <div className="col-md-8">
              <div className="top-restaurant">
                <button
                  className="filterbtn"
                  onClick={handleTopratingRestaurant}
                >
                  Rating 4.0+
                  <span
                    className="fa fa-star filterbtnn"
                    style={{ color: "orange" }}
                  ></span>
                </button>
                <button className="filterbtn" onClick={handleBelowPrice}>
                  Less than Rs.300
                </button>
                <button className="filterbtn" onClick={handleAbovePrice}>
                  Rs.300 - Rs.600
                </button>
                <button className="filterbtn">Non-veg 🍗</button>
                <button className="filterbtn">Pure Veg 🥗</button>
                <button className="filterbtn">Fast Delivery 🚚</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="searchFilter">
                <input
                  className="form-control mr-sm-1"
                  type="search"
                  value={searchVal}
                  onChange={(e) => {
                    setSearchVal(e.target.value);
                  }}
                  placeholder="Search for restaurant and food"
                  aria-label="Search"
                hidden/>
                <button hidden
                  className="btn btn-warning"
                  type="submit"
                  onClick={handleSearchClick}
                >
                  <FiSearch />
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            {searchFilter?.map((restdetails,id) => {
              return (
                <>
                  {restdetails?.info.isOpen ? (
                    <RestaurantCardPromoted key={restdetails.info.isOpen} {...restdetails} />
                  ) : (
                    <RestaurantCardList key={restdetails.info.name} {...restdetails} />
                  )}
                </>
              );
            })}
          </div>
    </div>

  )
}
export default Offers
