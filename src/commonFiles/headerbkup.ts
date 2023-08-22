// // import { LOGO_IMG } from "../utils/common";
// import { useState, useContext } from "react";
// import { FiArrowDown } from "react-icons/fi";
// import { FaUserCircle } from "react-icons/fa";
// import { MdFastfood, MdDeliveryDining } from "react-icons/md";
// import {
//   BiSolidCartAlt,
//   BiSolidOffer,
//   BiSolidLogInCircle,
//   BiSolidLogOutCircle,
// } from "react-icons/bi";
// import { IoMdHelpCircle } from "react-icons/io";
// import { FiSearch } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import useInternetConnection from "../hooks/useInternetConnection";
// import UserContext from "../contextApi/UserContext";

// const Header = () => {
//   const [loginBtn, setLoginBtn] = useState("Login");
//   const internetStatus = useInternetConnection();

//   // get here how to useContext api
//   const { loggedInUser } = useContext(UserContext);

//   return (
//     <div className="header-container">
//       <div className="navbar">
//         <div className="logo">
//           <Link className="logolink" to="/">
//             {/* <img width="200px" height="70px" src={LOGO_IMG} alt="food-logo" /> */}
//             {/* <h3>Namaste Food</h3> */}
//             <h1>
//               <MdFastfood
//                 style={{
//                   fontSize: "50px",
//                   color: "red",
//                   fontWeight: "bold",
//                 }}
//               />
//               <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
//                 Namaste Food{" "}
//                 <MdDeliveryDining
//                   style={{ fontSize: "24px", fontWeight: "bolder" }}
//                 />{" "}
//               </span>
//             </h1>
//           </Link>
//           <div className="current-location">
//             <p className="mainAddress">PUNE</p>
//             <p className="addresss">
//               406, Siddhi Complex Pune-412308{" "}
//               <FiArrowDown style={{ color: "orangered", fontWeight: "bold" }} />
//             </p>
//           </div>
//         </div>
//         <div className="listnavbar">
//           <ul className="nav-list">
//             <li>
//               <Link className="links" to="/searchBar">
//                 <FiSearch style={{ fontSize: "18px", marginRight: "3px" }} />{" "}
//                 Search
//               </Link>
//             </li>
//             <li>
//               <Link className="links" to="/offers">
//                 <BiSolidOffer /> Offer
//                 <sup style={{ color: "orangered" }}> New</sup>
//               </Link>
//             </li>
//             <li>
//               <Link className="links" to="/help">
//                 <IoMdHelpCircle /> Help
//               </Link>
//             </li>
//             <li>
//               <Link className="links" to="/cart">
//                 <BiSolidCartAlt /> Cart
//               </Link>
//             </li>
//             <li>
//               <Link className="links" to="/about">
//                 <FaUserCircle /> {loggedInUser}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 className="links"
//                 to="/login"
//                 onClick={() => {
//                   loginBtn === "Login"
//                     ? setLoginBtn("Logout")
//                     : setLoginBtn("Login");
//                 }}
//               >
//                 {loginBtn === "Login" ? (
//                   <BiSolidLogInCircle
//                     style={{ fontSize: "20px", color: "green" }}
//                   />
//                 ) : (
//                   <BiSolidLogOutCircle
//                     style={{ fontSize: "20px", color: "red" }}
//                   />
//                 )}{" "}
//                 {loginBtn}
//               </Link>
//             </li>
//             <li className="links">{internetStatus ? "✅" : "🔴"}</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
