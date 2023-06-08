import React from "react";
import "../style/header.scss";
// import { baseUrl } from "../global.json";
const Header = () => {
  // console.log(baseUrl);
  return (
    <div className="header">
      <img
        className="box logo"
        src="http://127.0.0.1:8000/media/front/222.png"
        alt="img logo errors"
      />
      <div className="box info">
        <div className="head head-name">агент: Григорий Громовик</div>
        <div className="head head-phone">+7 (962) 902 19 19</div>
      </div>
    </div>
  );
};

export default Header;
