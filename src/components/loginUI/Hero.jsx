import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import { Link } from "react-router-dom";

function Hero() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="hero container">
      <div className="hero__container">
        <div className="hero__textContainer">
          <p className="hero__sloganText">
            <TypeAnimation
              sequence={[
                "Finanical Planning Made Fast.",
                900, // Waits 1s
                "Finanical Planning Made Smart.",
                900, // Waits 2s
                "Finanical Planning Made Easy.",
                13000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={3}
            />
          </p>
        </div>
        <div className="hero__login">
          <form className="hero__form" onSubmit={handleSubmit}>
            <div className="hero__loginHeaderText">Sign in</div>
            <div className="hero__loginEmail">
              <label className="hero__label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="hero__formInputs"
                placeholder="cheese@mozzarella.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="hero__loginPassword">
              <label className="hero__label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="hero__formInputs"
                placeholder="Gouda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="limit__button">
              <Link to="/src/pages/Dashboard.jsx">Login</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
