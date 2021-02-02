import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => (
    <a href={props.href} className={classes.NavigationItem}>{props.value}</a>
)

export default NavigationItem;