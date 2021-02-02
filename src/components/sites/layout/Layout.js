import React from "react";
import classes from "./Layout.css";
import NavBar from "../../navigation/NavBar/NavBar";
import Auxeleration from "../../hoc/Auxeleration";

const layout = (props) => {
    
    return(
    <div>
        <NavBar class="NavBar"/>
        <div className="CurrentPage">
            {props.currentPage}
        </div>
    </div>
    ); 
}

export default layout;