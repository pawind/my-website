import Bar from "./Bar";

import classes from "./SortingDisplay.module.css";

const sortingDisplay = (props) => {
  const displayHeight = 900;
  const displayWidth = 1500;
  const amountBars = props.data.length;

  return (
    <div
      className={classes.sortingDisplay}
      style={{
        height: displayHeight + "px",
        width: displayWidth + "px",
      }}
    >
      <div className={classes.barSpace}>
        {props.data.map((barHeight, i) => {
          return (
            <Bar
              key={i}
              barHeight={barHeight}
              displayHeight={displayHeight}
              displayWidth={displayWidth}
              amountBars={amountBars}
            />
          );
        })}
      </div>
    </div>
  );
};

export default sortingDisplay;
