import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => (
    <span className={classes.NavigationItem}>{props.value}</span>
)

export default NavigationItem;