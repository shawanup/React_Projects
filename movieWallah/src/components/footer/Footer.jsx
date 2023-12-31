import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="socialIcons">
          <span className="icon">
            <a href="https://www.facebook.com/" target="_blank">
              {" "}
              <FaFacebookF />
            </a>
          </span>
          <span className="icon">
            <a href="https://www.instagram.com/" target="_blank">
              {" "}
              <FaInstagram />
            </a>
          </span>
          <span className="icon">
            <a href="https://twitter.com/i/flow/login" target="_blank">
              {" "}
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a href="https://in.linkedin.com/" target="_blank">
              {" "}
              <FaLinkedin />
            </a>
          </span>
        </div>
        <div className="copyrightTxt"><small>Created By <a href='#'>Anup Shaw</a> |<span className='fa fa-copyright'> &copy; </span>2023 All rights reserved</small><br /></div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
