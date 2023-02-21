import React from "react";
import './css/footer.css';
import { BsFacebook } from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"


function Footer() {
  return (
    <>
      <div className="footer">
        <div className="top">
          
          <div className="social-links">
            <a className="" href="#">
              <BsWhatsapp />
            </a>
            <a className="" href="#">
              <BsFacebook />
            </a>
            <a className="" href="#">
              <BsInstagram />
            </a>
            <a className="" href="#" size={70}>
              <BsLinkedin />
            </a>
          </div>
        </div>
        <div className="bottom">
          <p>&copy; 2023 Noor Alrayan Delivery Services Company</p>
        </div>
      </div>
     
    </>
  );
}

export default Footer;
