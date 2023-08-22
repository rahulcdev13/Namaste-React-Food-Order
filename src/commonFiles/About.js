import React from "react";
import { useContext } from "react";
import UserContext from "../contextApi/UserContext";

const About = () => {
  const { setUserName, loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About us</h1>
      <div className="pb-5 text-bold">
        <h1>fetch data from context api and updated</h1>
        UserName :{" "}
        <input className=""
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default About;
