import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
      <ul className="flex-container justify-center">
        <li>
          <AiOutlineInstagram size={45} className="instagram-icon" />
        </li>
        <li>
          <AiOutlineTwitter size={45} className="twitter-icon" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
