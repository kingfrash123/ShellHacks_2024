function LimitTerminal(props) {
  console.log(props);
  return (
    <div id="limit__terminal" className="limitTerminal display-none">
      The limit has been set to {props.limitNum} for the company{" "}
      {props.companyName}
    </div>
  );
}

export default LimitTerminal;
