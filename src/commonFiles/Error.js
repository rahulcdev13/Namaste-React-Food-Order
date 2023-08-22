// import { ERROR_IMG } from "../utils/common";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const Error = () => {
  // call useRouteError so we can access error data while routing
  return (
    <div className="cart-container">
      <div className="cartimg pt-5 pb-2">
        <img
          height="250"
          width="300"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87"
          alt="cartimg"
        />
        <h4 className="text-bolder text-color-secondary mt-3">
          Page not found
        </h4>
        <p style={{ fontSize: "13px", color: "gray" }}>
          Uh-oh! Looks like the page you are trying to access, doesn't exist.{" "}
          <br />
          Please start afresh.
        </p>
        <Link to="/">
          <button
            type=""
            className="btn btn-warning"
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            GO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
