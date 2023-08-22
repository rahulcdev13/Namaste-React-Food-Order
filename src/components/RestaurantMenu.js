import { BiSolidTimeFive } from "react-icons/bi";
import Shimmer from "./Shimmer";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { HiMiniCurrencyRupee } from "react-icons/hi2";
import { CiPercent } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantMenu = () => {
  const { restid } = useParams();
  // use custome hook
  const restaurantMenuInfo = useRestaurantMenu(restid);

  const [showIndex, setShowIndex] = useState(0);
  const [fevoroute, setFevoroute] = useState("");
  const navigate = useNavigate();

  if (restaurantMenuInfo === null) {
    return <Shimmer />;
  }
  const handleFeveroute = () => {
    setFevoroute("red");
  };
  const {
    city,
    totalRatingsString,
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    areaName,
  } = restaurantMenuInfo?.cards[0]?.card?.card?.info;

  const { slaString } = restaurantMenuInfo?.cards[0]?.card?.card?.info?.sla;

  // Recommanded item card
  // const { itemCards, title } =
  //   restaurantMenuInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]
  //     ?.card?.card;
  // Veg-Pizza Card
  // const vegPizza =
  //   restaurantMenuInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[3]
  //     ?.card?.card;
  // nonvegPizza Card
  // const nonvegPizza =
  //   restaurantMenuInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[4]
  //     ?.card?.card;
  // Pizza mania Card
  // const pizzaMania =
  //   restaurantMenuInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[5]
  //     ?.card?.card;
  // sides Card
  // const sides =
  //   restaurantMenuInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[6]
  //     ?.card?.card;
  // console.log(restaurantMenuInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR);

  const categories =
    restaurantMenuInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="restaurant-menu">
      <div className="container">
        <div className="pt-5 pb-5">
          <div className="row">
            <div className="col-md-2"> </div>
            <div className="col-md-8">
              <div className="details">
                <div className="home-path">
                  <h6>
                    <IoChevronBackCircleOutline
                      onClick={() => navigate(-1)}
                      style={{ color: "orangered", fontSize: "20px" }}
                    />{" "}
                    Home / {city} / {areaName}
                  </h6>
                </div>
                <div className="search-like">
                  <p style={{ fontSize: "22px", textAlign: "center" }}>
                    <AiOutlineHeart
                      onClick={handleFeveroute}
                      style={{ color: { fevoroute } }}
                    />{" "}
                    &nbsp;&nbsp;|&nbsp;&nbsp; <FiSearch />
                  </p>
                </div>
              </div>
              <div className="restaurant-info">
                <div className="restaurantDetails">
                  <h2 style={{ fontWeight: "bolder" }}>{name}</h2>
                  <h6 style={{ fontSize: "15px", color: "gray" }}>
                    {cuisines.join(", ")}
                  </h6>
                  <h6 style={{ fontSize: "13px", color: "gray" }}>
                    {areaName}
                  </h6>
                </div>
                <div className="restaurant-rating">
                  <h6 className="starrating">
                    <AiFillStar /> {avgRating}
                  </h6>
                  <hr></hr>
                  <h6 className="starratings">{totalRatingsString}</h6>
                </div>
              </div>
              <hr></hr>
              <div className="time-and-price">
                <p style={{ fontWeight: "bolder" }}>
                  <BiSolidTimeFive style={{ fontSize: "20px" }} /> {slaString} |
                  <HiMiniCurrencyRupee style={{ fontSize: "20px" }} />
                  {costForTwoMessage}
                </p>
              </div>
              <div className="row">
                <div className="col-md-3 offer-upto">
                  <h6 className="upto-off">
                    <CiPercent /> Flat 10% off upto 120
                  </h6>
                  <h6 className="use-off">USE PARTY I ABOVE Rs.130</h6>
                </div>
                <div className="col-md-3 offer-upto">
                  <h6 className="upto-off">Flat 10% off upto 120</h6>
                  <h6 className="use-off">USE PARTY I ABOVE Rs.130</h6>
                </div>
                <div className="col-md-3 offer-upto">
                  <h6 className="upto-off">Flat 10% off upto 120</h6>
                  <h6 className="use-off">USE PARTY I ABOVE Rs.130</h6>
                </div>
                <div className="col-md-3 offer-upto">
                  <h6 className="upto-off">Flat 10% off upto 120</h6>
                  <h6 className="use-off">USE PARTY I ABOVE Rs.130</h6>
                </div>
              </div>
              <div className="veg-nonveg pt-3">
                <input type="checkbox" />
                <h6 className="veg-nonvegs"> Veg-Only</h6>
              </div>
              <hr></hr>
              {/* category-accordian for restaurant menu */}
              <div className="category-accordian">
                {categories.map((categoryList, index) => {
                  return (
                    <>
                      {/* This is constrolled component from another components */}
                      <RestaurantCategory
                        key={categoryList?.card?.card?.title}
                        {...categoryList}
                        showItems={showIndex ? true : false} // constrolled component code here usig props
                        setShowIndex={() => setShowIndex(index)} // This is at time one accordian work and remaining close
                      />
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-2"> </div>
          </div>
          <div className="pb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
