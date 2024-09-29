function Footer() {
  return (
    <section className="footer">
      <div className="footer__box">
        <div className="footer__content">
          <h3>Developers</h3>
          <ul className="footer__list">
            <li>
              <p className="footer__link">Front End - Joshua Washington</p>
            </li>
            <li>
              <p className="footer__link"> Back End - King Primo</p>
            </li>
          </ul>
        </div>
        <div className="footer__content">
          <h3>Tech Stack Used</h3>
          <div className="footer__listContainer">
            <ul className="footer__list">
              <li>
                <a
                  href="https://react.dev/"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  REACT
                </a>
              </li>
              <li>
                <a
                  href="https://sass-lang.com/"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SCSS
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/Style/CSS/Overview.en.html"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS
                </a>
              </li>
              <li>
                <a
                  href="https://html.com/"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HTML
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <li>
                <a
                  href="https://nodejs.org/en"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Node.js
                </a>
              </li>
              <li>
                <a
                  href="https://expressjs.com/"
                  className="footer__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Express
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
