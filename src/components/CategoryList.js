import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { MENU_ITEM_IMG } from "../utils/common";
import { FaDotCircle } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItems } from "../reduxToolkit/cartSlice";

const CategoryList = (itemCards) => {
  
  const dispatch = useDispatch();
  const handleAddItem = (menuItem) => {
    dispatch(addItems(menuItem));
  };
  return (
    <Accordion.Body>
      <div className="menu-container">
        {itemCards?.itemCards?.map((menuItem) => {
          const { name, description, price, imageId } = menuItem?.card?.info;
          const { vegClassifier } = menuItem?.card?.info?.itemAttribute;
          const { text } = menuItem?.card?.info?.ribbon;

          return (
            <>
              <div className="details" key={menuItem?.card?.info?.id}>
                <div className="home-path">
                  <h6>
                    {vegClassifier === "VEG" ? (
                      <FaDotCircle className="veg-icon" />
                    ) : (
                      <FaDotCircle className="nonveg-icon" />
                    )}
                    <span>
                      {text ? (
                        <span style={{ color: "orange" }}>
                          <AiFillStar /> Bestseller
                        </span>
                      ) : (
                        ""
                      )}
                    </span>
                  </h6>
                  <h6
                    style={{
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    {name}
                  </h6>
                  <h6
                    style={{
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    ₹{price / 100} | 60% OFF | USE STEALDEAL
                  </h6>
                  <h6 style={{ fontSize: "13px", color: "gray" }}>
                    {description}
                  </h6>
                </div>
                <div className="menu-img">
                  <img
                    className="menuimage"
                    src={MENU_ITEM_IMG + imageId}
                    alt=""
                    height="110px"
                    width="140px"
                  />
                  <br />
                  <button
                    className="addBtn"
                    onClick={() => handleAddItem(menuItem)}
                  >
                    Add <BiPlus style={{ marginBottom: "2px" }} />
                  </button>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </Accordion.Body>
  );
};

export default CategoryList;
