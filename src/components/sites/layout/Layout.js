import React from "react";
import "./Layout.css"
import NavBar from "../../navigation/NavBar/NavBar";

const layout = (props) => {
    
    return(
    <div className="Layout">
        <NavBar class="NavBar"/>
        <div className="CurrentPageContainer">
            {props.currentPage}
        </div>
        
    </div>
    ); 
}
export default layout;