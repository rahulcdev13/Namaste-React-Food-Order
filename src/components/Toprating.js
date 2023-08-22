import React from "react";
import { IMG_CDN_URL } from "../utils/common";

const Toprating = (restdetails) => {
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        areaName,
      } = restdetails.info;
  return (
    
      <div className="col-md-3 mb-3">
        <div className="cardss">
          <img
            className="img-fluid"
            alt="100%x280"
            src={IMG_CDN_URL + cloudinaryImageId}
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <h6 className="card-text">{avgRating}</h6>
            <h6 className="card-text">{cuisines.join(", ")}</h6>
            <h6 className="card-text">
              {costForTwo} : {areaName}
            </h6>
          </div>
        </div>
      </div>
  );
};

export default Toprating;
