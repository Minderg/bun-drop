import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Home() {
  return (
    <div className="home-container">
      <div className="text-left">
        <h5>
          Introducing BurgerDrone: The Future of Deliciously Convenient Dining!
        </h5>
        <p>
          Welcome to BurgerDrone, where we're taking burger delivery to new
          heights—literally! Satisfying your cravings has never been easier or
          more exciting. Imagine a world where your favorite mouthwatering
          burgers are just a few clicks away, delivered directly to your
          doorstep by our fleet of cutting-edge drones.
        </p>
        <Link to={"https://www.instagram.com/gabrielminder/"}>
          <AiOutlineInstagram size={40} className="instagram-icon-home" />
        </Link>
        <Link to={"https://twitter.com/MinderGabriel"}>
          <AiOutlineTwitter size={40} className="twitter-icon-home" />
        </Link>
        <Link to={"https://www.linkedin.com/in/gabriel-minder/"}>
          <AiOutlineLinkedin size={40} className="linkedin-icon-home" />
        </Link>
      </div>
      <div className="img-right">
        {/* <span>
          <img
            className="img-home"
            src="/assets/logo-color.png"
            alt="BurgerDrone Logo"
          />
        </span> */}
        <Link to="/menu">
          <button className="btn-menu">To the Meny</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
