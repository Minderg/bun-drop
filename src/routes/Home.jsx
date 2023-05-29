import React from "react";

function Home() {
  return (
    <div className="home-container">
      <div className="text-left">
        <h5 className="intro">
          Introducing BurgerDrone: The Future of Deliciously Convenient Dining!
        </h5>
        <p>
          Welcome to BurgerDrone, where we're taking burger delivery to new
          heights—literally! Satisfying your cravings has never been easier or
          more exciting. Imagine a world where your favorite mouthwatering
          burgers are just a few clicks away, delivered directly to your
          doorstep by our fleet of cutting-edge drones.
        </p>
      </div>
      <div className="img-right">
        <img src="/assets/logo-color.png" alt="BurgerDrone Logo" />
        <button className="btn-meny">To Meny</button>
      </div>
    </div>
  );
}

export default Home;
