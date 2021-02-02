import React, { useState }from 'react'
import classes from "./NavBar.module.css";
import NavigationItem  from "../NavigationItem/NavigationItem";

const NavBar = (props) => {
    
    return(
        <div className={classes.NavBar}>
            <NavigationItem href="" value="About ME"/>
            <NavigationItem href="" value="Projects"/>
        </div>
    )
}

export default NavBar;