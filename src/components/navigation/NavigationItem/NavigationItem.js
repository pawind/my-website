import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => (
    <span className={classes.NavigationItem} onClick={() => props.onSiteChange(props.id)}>{props.value}</span>
)

export default NavigationItem;