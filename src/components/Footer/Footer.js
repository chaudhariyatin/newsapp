import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CodeIcon from "@material-ui/icons/Code";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Made in India with{" "}
        <span>
          <FavoriteIcon style={{ color: "red", fontSize: "1.2rem" }} />
        </span>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="/">
          <GitHubIcon style={{ color: "white", paddingRight: "30px" }} />
        </a>
        <a href="/">
          <CodeIcon style={{ color: "white" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
