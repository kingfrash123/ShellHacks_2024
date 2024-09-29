function LimitTerminal(props) {
  console.log(props);
  return (
    <div id="limit__terminal display-none" className="limitTerminal">
      The limit has been set to {props.limitNum} for the company{" "}
      {props.companyName}
    </div>
  );
}

export default LimitTerminal;
