import { Link } from "react-router-dom";

function HeaderDashboard() {
  return (
    <nav className="nav container">
      <div className="nav__container">
        <p className="nav__logoText">Nomisma</p>
        <Link to="/src/pages/Dashboard.jsx" className="nav__link">
          Login
        </Link>
        {/* {navigationArray.map({ title, link })} => (
        <Link key={link} to={link}>
          <a className="nav__loginText" href="">
            Dashboard
          </a>
        </Link>
        ) */}
      </div>
    </nav>
  );
}

export default HeaderDashboard;
