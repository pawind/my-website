import React from "react";
import classes from "./NavBar.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const NavBar = (props) => {
  return (
    <div className={classes.NavBar}>
      <NavigationItem
        onPageChange={props.onPageChange}
        value="Projects"
        v="projects"
      />
      <NavigationItem
        onPageChange={props.onPageChange}
        value="About ME"
        v="about-me"
      />
    </div>
  );
};

export default NavBar;
