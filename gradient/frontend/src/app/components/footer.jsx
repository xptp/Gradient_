import React from "react";
import "../style/footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <img
        className="img-footer footer-box"
        src="http://127.0.0.1:8000/media/front/m.png"
        alt="error img"
      />
      <div className="info-footer footer-box">
        <div className="info-item">Григорий Громовик</div>
        <div className="info-item">+7 (962) 902 19 19</div>
      </div>

      <div className="sinema">
        <div className="sinema-main sinema-1">
          © All Rights Reserved. ООО "3.14 СИНЕМА"
        </div>
        <div className="sinema-main sinema-2">info@gradientagency.ru</div>
      </div>
    </div>
  );
};

export default Footer;
