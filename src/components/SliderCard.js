import React from "react";
// import TopRatingRestaurantSlider from "./TopRatingRestaurantSlider";
const SliderCard = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <section className="pt-4 pb-2">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h4 className="mb-3" style={{ fontWeight: "bolder" }}>
                    Best offers for you
                  </h4>
                </div>
                <div className="col-6 text-right">
                  <a
                    className="btn btn-warning mb-3 mr-1"
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-arrow-left"></i>
                  </a>
                  <a
                    className="btn btn-warning mb-3 "
                    href="#carouselExampleIndicators2"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
                <div className="col-12">
                  <div
                    id="carouselExampleIndicators2"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <div className="cardss">
                              <img
                                className="img-fluid"
                                alt="100%x280"
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/836d745383830ea30b6d524a7953e736"
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="cardss">
                              <img
                                className="img-fluid"
                                alt="100%x280"
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/071d07e5d5deb5e3da47feef18fb14fc"
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="cardss">
                              <img
                                className="img-fluid"
                                alt="100%x280"
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/280c841530518f3b04bb2fec89118e9f"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="row">
                          <div className="col-md-4 mb-3">
                            <div className="cardss">
                              <img
                                className="img-fluid"
                                alt="100%x280"
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/4849344847b92264266ee39e55d38972"
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="cardss">
                              <img
                                className="img-fluid"
                                alt="100%x280"
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/ac87ef07213f2596be52366e801c0e49"
                              />
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="cardss">
                              <img
                                className="img-fluid"
                                alt="100%x280"
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/4588eea459c19a835bac4f75e44267b5"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <TopRatingRestaurantSlider /> */}
        </div>
      </div>
    </>
  );
};
export default SliderCard;
