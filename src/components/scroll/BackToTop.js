import React from "react";
import { Zoom, useScrollTrigger } from "@material-ui/core";

const style = {
  position: `fixed`,
  bottom: `11rem`,
  right: `2rem`,
  zIndex: `99`,
};

const BackToTop = ({ children }) => {
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={style}>
        {children}
      </div>
    </Zoom>
  );
};

export default BackToTop;
