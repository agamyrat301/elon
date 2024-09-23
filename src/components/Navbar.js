import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container flex space-between items-center">
      <div className="flex  logo">
        <Link to="/">
          <img src={logo} className="img" alt="logo" />
        </Link>
      </div>
      <ul className="flex navbar_ul">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          {" "}
          <Link to="/">Технология</Link>
        </li>
        <li>
          <Link to="/">График полетов</Link>
        </li>
        <li>
          <Link to="/">Garantii</Link>
        </li>
        <li>
          <Link to="/">O Companii</Link>
        </li>
        <li>
          <Link to="/">Contacts</Link>
        </li>
      </ul>
      </div>
    </header>
  );
};

export default Navbar;
