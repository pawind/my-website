import React, { useState } from "react";
import classes from "./Layout.module.css";
import NavBar from "../../navigation/NavBar/NavBar";
import Auxeleration from "../../hoc/Auxeleration";

const layout = (props) => {
    
    return(
    <div>
        <NavBar className={classes.NavBar}/>
        <Auxeleration class={classes.currentPage}>
            {props.currentPage}
        </Auxeleration>
    </div>
    ); 
}

export default layout;