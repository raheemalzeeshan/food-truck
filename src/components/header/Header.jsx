import React from "react";
import logo from "../../assets/images/logo.png";
import heroImage from "../../assets/images/hero-image.png";
import Button from "../button/Button";
import "../../assets/css/header.css";

export default function Header() {
  return (
    <header>
      {/* Navigation */}
      <nav>
        <div className="navbar">
          <div className="container navbar-container">
            <div className="logo">
              <img src={logo} alt="Food Truck" />
            </div>
            <p className="getInTouch">
              <Button
                link="#"
                class="btn btn-outline--light"
                btnName="Get In Touch"
              />
            </p>
          </div>
        </div>
      </nav>
      <div className="hero-banner">
        <div className="hero-image">
          <img src={heroImage} alt="hero image" />
        </div>
        {/* Hero Banner content */}
        <div className="hero-banner--content">
          <div className="container">
            <h1>
              Discover the <span>Best</span> Food and Drinks
            </h1>
            <p>
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>
            <Button link="#" class="btn btn-fill" btnName="Explore Now!" />
          </div>
        </div>
      </div>
    </header>
  );
}
