import React, { useState }from 'react'
import classes from "./NavBar.module.css";
import NavigationItem  from "../NavigationItem/NavigationItem";

const NavBar = (props) => {
    
    return(
        <div className={classes.NavBar}>
            <NavigationItem value="Projects"/>
            <NavigationItem value="About ME"/>
        </div>
    )
}

export default NavBar;