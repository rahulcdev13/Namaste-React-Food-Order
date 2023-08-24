import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MENU_ITEM_IMG } from "../utils/common";
import { FaDotCircle } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { BiPlus, BiMinus, BiSolidOffer } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { clearItems, removeItems } from "../reduxToolkit/cartSlice";
import Emptycart from "../commonFiles/Emptycart"

const Cart = () => {
  const [count,setCounter] = useState(1);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const navigate = useNavigate();

  // dont do that all store will be subscribe using below code try to select perticular portion
  // const store = useSelector((store)=>store);
  // const cartItems = store.cart.items;

  const dispatch = useDispatch();
  const handleRemoveCart = () => {
    dispatch(clearItems());
  };

  const handleRemoveSingleCart = (id) => {
    dispatch(removeItems(id));
  };

  return (
    <>
      <div className="cart-container">
        <div className="container">
          {cartItems.length === 0 ? (
            <Emptycart />
          ) : (
            <>
              <div className="text-left">
                <button
                  className="backtomenu mb-4 mt-4 font-bold"
                  onClick={()=>navigate(-1)}
                >Back to menu
                </button>
                <button
                  className="removeallitem mb-4 mt-4 font-bold"
                  onClick={handleRemoveCart}
                >
                  Remove all item's
                </button>
              </div>
              <div className="menucontainer">
                <div className="cart-details">
                  {cartItems.map((item) => {
                    const { name, description, price, imageId, id } =
                      item?.card?.info;
                    const { vegClassifier } = item?.card?.info?.itemAttribute;
                    const { text } = item?.card?.info?.ribbon;
                    return (
                      <>
                        <div className="card-detailss" key={id}>
                          <div className="menu-img mx-1 mb-3">
                            <img
                              className="menuimages"
                              src={MENU_ITEM_IMG + imageId}
                              alt="cartImg"
                              height="150px"
                              width="190px"
                            />
                          </div>
                          <div className="home-path mx-5 mb">
                            <div className="cartbtn">
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
                              <h6 className="addBtnremove">
                                <MdDelete
                                  onClick={() => handleRemoveSingleCart(id)}
                                />
                              </h6>
                            </div>
                            <h6
                              style={{
                                fontWeight: "bolder",
                                fontSize: "17px",
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
                              ₹{price / 100}
                            </h6>
                            <h6
                              className="description-biilingcart"
                              style={{ fontSize: "13px", color: "gray" }}
                            >
                              {description}
                            </h6>
                            <button className="addBtncart">
                              <BiMinus onClick={()=>setCounter(count-1)} /> {count} <BiPlus onClick={()=>setCounter(count+1)} />
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="bill-section mx-5 mb-5">
                  <h5 className="font-bolder mb-3">Bill Details</h5>
                  <div className="billing">
                    <p>Item Total</p>
                    <p>₹769.54</p>
                  </div>
                  <div className="billing">
                    <p>
                      Delivery Fee | 9.1 kms <FiAlertCircle />
                    </p>
                    <p>₹100</p>
                  </div>
                  <div className="suggetion">
                    <input
                      className="mt-3 p-2 w-100 sugges"
                      placeholder="? Any Suggestions? we will pass it on..."
                    />
                  </div>
                  <hr></hr>
                  <div className="billing">
                    <p>
                      GST and Restaurant Charges <FiAlertCircle />{" "}
                    </p>
                    <p>₹73.47</p>
                  </div>
                  <div className="apply">
                    <p className="mt-2">
                      <BiSolidOffer /> Apply Coupon
                    </p>
                  </div>
                  <hr></hr>
                  <div className="billing font-bold">
                    <h6 className="font-bolder">TOTAL PAY</h6>
                    <h6 className="font-bolder">₹953</h6>
                  </div>
                  <button type="" className="mt-3 p-2 w-100 paybtn">
                    Proceed to pay
                  </button>
                  <div className="foodpolicy">
                    <h6 className="font-bold">
                      {" "}
                      Review your order and address details to avoid
                      cancellations
                    </h6>
                    <p className="polyciy">
                      Note: If you cancel within 60 seconds of placing your
                      order, a 100% refund will be issued. No refund for
                      cancellations made after 60 seconds.
                    </p>
                    <p className="polyciy">
                      Avoid cancellation as it leads to food wastage.
                    </p>
                    <p className="polyciy">Read cancellation policy</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
