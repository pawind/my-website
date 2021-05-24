import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => (
  <span
    onClick={() => props.onPageChange(props.v)}
    className={classes.NavigationItem}
  >
    {props.value}
  </span>
);

export default NavigationItem;
