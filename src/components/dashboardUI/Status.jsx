// const limitListOne = document.getElementById("limitListOne");
// const limitListTwo = document.getElementById("limitListTwo");

function Status(props) {
  return (
    <div className="status">
      <h3 className="status__userHeader">Welcome, {props.username}</h3>
      <div className="status__container">
        <div id="limitListOne" className="status__accountInfoOne">
          <h3 className="status__accountHeader">{props.account}</h3>
          <p>Balance: {props.account1total}</p>
          <div className="status__acconuntInfoContainer">
            <p>{props.company}</p>
            <p>{props.limit}</p>
          </div>
          <div className="status__accountInfoContainer">
            <p>Bteam</p>
            <p>200</p>
          </div>
          <div className="status__accountInfoContainer">
            <p>Bollo Bropical</p>
            <p>40</p>
          </div>
          <div className="status__accountInfoContainer">
            <p>Bmazon</p>
            <p>45</p>
          </div>
        </div>
        <div id="limitListTwo" className="status__accountInfoTwo">
          <h3 className="status__accountHeader">{props.secondAccount}</h3>
          <p>Balance: {props.account1total}</p>

          <div>
            <p>{props.company}</p>
            <p>{props.limit}</p>
          </div>
          <div className="status__accountInfoContainer">
            <p>Gbay</p>
            <p>450</p>
          </div>
          <div className="status__accountInfoContainer">
            <p>WcBonalds</p>
            <p>45</p>
          </div>
          <div className="status__accountInfoContainer">
            <p>Bennheiser</p>
            <p>45</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
