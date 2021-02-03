<<<<<<< HEAD
import React from 'react'
=======
import React, { useState }from 'react'
>>>>>>> ef36dbeea79c8b77468776a9dd2c4337f0a180ed
import classes from "./NavBar.module.css";
import NavigationItem  from "../NavigationItem/NavigationItem";

const NavBar = (props) => {
    
    return(
        <div className={classes.NavBar}>
<<<<<<< HEAD
            <NavigationItem href="" value="About ME"/>
            <NavigationItem href="" value="Projects"/>
=======
            <NavigationItem value="Projects"/>
            <NavigationItem value="About ME"/>
>>>>>>> ef36dbeea79c8b77468776a9dd2c4337f0a180ed
        </div>
    )
}

export default NavBar;