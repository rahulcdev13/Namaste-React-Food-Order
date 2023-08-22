import React from "react";
import { useContext } from "react";
import UserContext from "../contextApi/UserContext";
// import { LOGO_IMG } from "../utils/common";
import {
  GMAIL_URL,
  TWITTER_URL,
  LINKEDIN_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  SKYPE_URL,
} from "../utils/social_links";
import { BiLogoGmail } from "react-icons/bi";
import {
  TiSocialLinkedin,
  TiSocialSkype,
  TiSocialTwitter,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialFacebook,
} from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div className="footer">
      {/* <div className="footer-logo"> */}
      {/* <img width="200px" height="80px" src={LOGO_IMG} alt="food-logo" /> */}
      <p style={{ marginTop: "25px" }}>
        Created by {loggedInUser} © 2023 Namaste React
      </p>
      <p className="social">
        <span className="social" onClick={() => navigate({ GMAIL_URL })}>
          <BiLogoGmail to={GMAIL_URL} />
        </span>
        <span className="social" onClick={() => navigate({LINKEDIN_URL})}>
          <TiSocialLinkedin />
        </span>
        <span className="social" onClick={() => navigate({SKYPE_URL})}>
          <TiSocialSkype />
        </span>
        <span className="social" onClick={() => navigate({TWITTER_URL})}>
          <TiSocialTwitter />
        </span>
        <span className="social" onClick={() => navigate({FACEBOOK_URL})}>
          <TiSocialFacebook />
        </span>
        <span className="social" onClick={() => navigate({INSTAGRAM_URL})}>
          <TiSocialInstagram />
        </span>
        <span className="social" onClick={() => navigate(YOUTUBE_URL)}>
          <TiSocialYoutube />
        </span>
        <span className="social">
          <a href="https://www.youtube.com/watch?v=rWFahgbHiqc" target="_youtube_link" rel="noopener noreferrer"><TiSocialYoutube /></a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
