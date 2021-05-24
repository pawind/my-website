import classes from "./LandingPage.module.css";
import pic from "../../../assets/profilbild.jpg";
import PersonalDescription from "../../PersonalDescription/PersonalDescription";

const landingPage = (props) => {
  return (
    <div className={classes.LandingPage}>
      <div className={classes.PersonalDescription}>
        <PersonalDescription
          text={{
            name: "Paul Windheuser",
            age: "17",
            city: "Düsseldorf",
            job: "Student",
          }}
          imgSrc={pic}
        />
      </div>
    </div>
  );
};

export default landingPage;
