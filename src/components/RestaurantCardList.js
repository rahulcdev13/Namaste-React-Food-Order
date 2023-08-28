import React from "react";
import { IMG_CDN_URL } from "../utils/common";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const RestaurantCardList = (restdetails) => {
  // const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, areaName } =
  //   restdetails?.info;

  // console.log(restdetails);
  // const { header, subHeader } = restdetails?.info?.aggregatedDiscountInfoV3;

  // console.log(restdetails);
  
  
  const avgrating = {
    backgroundColor: restdetails?.info?.avgRating >= 4 ? "green" : "orange",
  };
  return (
    <div className="col-md-3">
      <Link
        to={"restaurantMenu/" + restdetails?.info?.id}
        className="CardDecoration-None"
      >
        <div className="cards">
          <div className="img-container">
            <img
              className="card-img-top"
              src={IMG_CDN_URL + restdetails?.info?.cloudinaryImageId}
              alt="foodimg"
            />
            <p className="offer">
              {restdetails?.info?.aggregatedDiscountInfoV3?.header} {restdetails?.info?.aggregatedDiscountInfoV3?.subHeader}
            </p>
          </div>
          <div className="card-bodys">
            <div className="foodHeading">
              <h6 className="avgrating" style={avgrating}>
                {restdetails?.info?.avgRating}
                <AiOutlineStar style={{ marginBottom: "4px" }} />
              </h6>
              <h5 className="card-title">{restdetails?.info?.name}</h5>
            </div>
            <h6 className="cuisines">{restdetails?.info?.cuisines.join(", ")}</h6>
            <h6>{restdetails?.info?.costForTwo}</h6>
            <h6 className="card-text">
              <small className="text-muted">{restdetails?.info?.areaName}</small>
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Higher order componenets || Input = RestaurantCardList => RestaurantCardListPromoted 
export const withPromotedLable = (RestaurantCardList) => {
  return (restdetails) => {
    return <>
      {/* <label>Promoted</label> */}
      <RestaurantCardList {...restdetails} />
    </>;
  };
};

export default RestaurantCardList;
