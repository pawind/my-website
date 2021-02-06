import React from "react";
import classes from "./PersonalDescription.module.css";

const PersonalDescription = (props) => {
    return (
        <div className={classes.PersonalDescription}>
            <div className={classes.PersonalPic}>
                <img
                src={props.imgSrc}/>
            </div>
            <h1>{props.name}</h1>
            <h2>{props.city}</h2>
            <h3>{props.job}</h3>
        </div>
    );
}
 
export default PersonalDescription;