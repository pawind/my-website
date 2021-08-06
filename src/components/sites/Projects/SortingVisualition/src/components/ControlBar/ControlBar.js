const controlBar = (props) => {
  return (
    <div>
      <input
        type="range"
        step="10"
        min="0"
        max="120"
        value={props.amount}
        onInput={(e) => props.handleAmountChange(e.target.value)}
      ></input>

      {/* <input type="button" value="Create" onClick={props.createBars} /> */}
      {/* Create Button Solution if used then uncomment App->createData->setData([]) */}
    </div>
  );
};

export default controlBar;
