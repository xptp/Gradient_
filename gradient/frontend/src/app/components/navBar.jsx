import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.scss";
const NavBar = () => {
  return (
    <div className="main-nav">
      <ul>
        <li className="li-nav">
          <Link to="">Актеры агенства</Link>
        </li>
        <li className="li-nav">
          <Link to="actors">Мужщины</Link>
        </li>
        <li className="li-nav">
          <Link to="actress">Женщины</Link>
        </li>
        <li className="li-nav">
          <Link to="contacts">Контакты</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
