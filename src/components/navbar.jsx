import React, { Component } from "react";

//stateless functional component
//do this when you only have render function

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
