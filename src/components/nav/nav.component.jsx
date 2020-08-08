import React from "react";
import "./nav.style.scss";
import MovieIcon from "@material-ui/icons/Movie";
import HdIcon from "@material-ui/icons/Hd";
const Nav = () => {
  return (
    <div className="nav">
      <div className="title">
        <h4>MMovie</h4>
        <MovieIcon />
      </div>
      <div className="logo">
        <HdIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Nav;
