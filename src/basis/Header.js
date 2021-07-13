import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="header_left">
        <p>
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets{" "}
        </p>
      </div>
      <div className="header_right">
        <nav>
          <ul>
            <li>
              <Link to="#">INSTAGRAM</Link>
            </li>
            <li>
              <Link to="#">YOUTUBE</Link>
            </li>
            <li>
              <Link to="#">LINKEDIN</Link>
            </li>
            <li className="ham">
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
