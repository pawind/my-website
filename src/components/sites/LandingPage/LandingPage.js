import classes from "./LandingPage.module.css";
import pic from "../../../assets/profilbild.jpg";

const landingPage = (props) => {
    return(
    <div className={classes.LandingPage}>
        LandingPage
        <img alt="Profilepicture" src={pic}/>
    </div>
    ); 
}

export default landingPage;