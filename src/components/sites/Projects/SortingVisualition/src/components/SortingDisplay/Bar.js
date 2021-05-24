import classes from "./Bar.module.css";

const bar = (props) => {
  const marginTop = props.displayHeight - props.barHeight;
  const width = (props.displayWidth * 0.8) / props.amountBars;
  console.log(width);
  return (
    <span
      className={classes.bar}
      style={{
        paddingTop: props.barHeight,
        marginTop: marginTop,
        paddingRight: width + "px",
      }}
    ></span>
  );
};

export default bar;
