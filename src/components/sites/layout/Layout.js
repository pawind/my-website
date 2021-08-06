import React from "react";
import "./Layout.css"
import NavBar from "../../navigation/NavBar/NavBar";

const layout = (props) => {
    
    return(
    <div className="Layout">
        <NavBar handleSiteChange={props.handleSiteChange} className="NavBar"/>
        <div className="CurrentPageContainer">
            {props.children}
        </div>
        
    </div>
    ); 
}
export default layout;