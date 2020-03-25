import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Logo from "../../assets/logo.jpg";

const navigation = props => {
  return (
    <div className="navigation">
      {/* <div className="logo">
        <img src={Logo} placeholder="Quiz" />
      </div> */}
      <ul className="nav__lists">
        <li className="nav__list">
          <Link className="Link-a" to="/">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="nav__list">
          <Link className="Link-a" to="/result">
            {" "}
            Result{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default navigation;
