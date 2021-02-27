import React from "react";
import Drawer from "../Drawer/Drawer";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <Drawer setCategory={setCategory} />
      </div>
      <span style={{ fontSize: "1.3rem" }}>The News App</span>
    </div>
  );
};

export default Navbar;
