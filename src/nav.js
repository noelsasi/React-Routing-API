import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
    textdecoration: "none"
  };
  return (
    <nav>
      <h3>Routing**API's</h3>
      <ul className="mynav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/apiData">
          <li>Api Data</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li>void();</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
