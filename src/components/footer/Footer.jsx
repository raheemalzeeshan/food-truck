import React from "react";
import logo from "../../assets/images/logo.png";
import instagramLogo from "../../assets/svg/instagram.svg";
import twitterLogo from "../../assets/svg/twitter.svg";
import facebookLogo from "../../assets/svg/facebook.svg";
import "../../assets/css/footer.css";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <div className="logo footer-item">
            <img src={logo} alt="food truck" />
          </div>
          <div className="footer-details footer-item">
            <h4>Contact Us</h4>
            <p>
              Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
              Market, XYZ-343434
            </p>
            <p>
              <a href="mailto:example2020@gmail.com">example2020@gmail.com</a>
            </p>
            <p>
              <a href="tel:904443-0343">(904) 443-0343</a>
            </p>
          </div>
          <div className="footer-navlinks footer-item">
            <h4>More</h4>
            <nav>
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Career</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-socail--links footer-item">
            <h4>Social Links</h4>
            <ul className="footer-desktop--links">
              <li>
                <a href="">
                  <img src={instagramLogo} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={twitterLogo} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={facebookLogo} alt="Facebook" />
                </a>
              </li>
            </ul>
            <p className="footer-credit">© 2022 Food Truck Example</p>
            <ul tabIndex="0" className="footer-mobile--links">
              <li>
                <a href="">
                  <img src={instagramLogo} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={twitterLogo} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={facebookLogo} alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
