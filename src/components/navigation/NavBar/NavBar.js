import React from 'react'
import classes from "./NavBar.module.css";
import NavigationItem  from "../NavigationItem/NavigationItem";

const NavBar = (props) => {
    
    return(
        <div className={classes.NavBar}>
            <NavigationItem onSiteChange={props.handleSiteChange} id="projects" value="Projects"/>
            <NavigationItem onSiteChange={props.handleSiteChange} id="about me" value="About ME"/>
        </div>
    )
}

export default NavBar;