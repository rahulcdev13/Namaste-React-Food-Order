import React, { useState } from "react";
import { restList } from "../utils/common";
import { IMG_CDN_URL } from "../utils/common";

const TopRatingRestaurantSlider = () => {
  const [toRestaurantList] = useState(restList);

  return (
    <div className="row">
      <div className="col-md-12">
        <section className="pt-2 pb-2">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h4 className="mb-3" style={{ fontWeight: "bolder" }}>
                  Top restaurant chains in Pune
                </h4>
              </div>
              <div className="col-6 text-right">
                <a
                  className="btn btn-warning mb-3 mr-1"
                  href="#carouselExampleIndicators3"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fa fa-arrow-left"></i>
                </a>
                <a
                  className="btn btn-warning mb-3 "
                  href="#carouselExampleIndicators3"
                  role="button"
                  data-slide="next"
                >
                  <i className="fa fa-arrow-right"></i>
                </a>
              </div>
              <div className="col-12">
                <div
                  id="carouselExampleIndicators3"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        {toRestaurantList.map((restdetails) => {
                          const {
                            cloudinaryImageId,
                            name,
                            avgRating,
                            cuisines,
                            costForTwo,
                            areaName,
                          } = restdetails.info;
                          return (
                            <>
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
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default TopRatingRestaurantSlider;
