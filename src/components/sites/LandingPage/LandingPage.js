import classes from "./LandingPage.module.css";
import pic from "../../../assets/profilbild.jpg";
import PersonalDescription from "../../PersonalDescription/PersonalDescription";

const landingPage = (props) => {
  return (
    <div className={classes.LandingPage}>
        <div className={classes.PersonalDescription}>
            <PersonalDescription
            name="Paul Windheuser"
            city="I currently live in Stavoren"
            job="I study computer sience in Münster"
            imgSrc={pic}/>
        </div>
    </div>
  );
};

export default landingPage;
