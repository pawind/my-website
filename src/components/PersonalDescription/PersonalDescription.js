import React from "react";
import classes from "./PersonalDescription.module.css";

const PersonalDescription = (props) => {
    return (
        <div className={classes.PersonalDescription}>
                <img
                className={classes.PersonalPic}
                src={props.imgSrc}
                alt="Picture of me"
                />
            <h1>{props.text.name}, {props.text.age}</h1>
            <h3>{props.text.job} in {props.text.city}</h3>
        </div>
    );
}
 
export default PersonalDescription;