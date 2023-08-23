import React from "react";
import { Link } from "react-router-dom";

const Emptycart = () => {
  return (
    <>
      <div className="cartimg pt-5 pb-2">
        <img
          height="300"
          width="300"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="cartimg"
        />
        <h5 className="text-bolder text-color-secondary mt-3">
          Your cart is empty
        </h5>
        <p style={{ fontSize: "12px", fontWeight: "bold", color: "gray" }}>
          You can go to home page to view more restaurants
        </p>
        <Link to="/">
          <button
            type=""
            className="btn btn-warning"
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            SEE RESTAURANTS NEAR YOU
          </button>
        </Link>
      </div>
    </>
  );
};
export default Emptycart;
