import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      
      <div className="content">
        <h1>
          Bring spice to your life
        </h1>
        <p className="description">
          The food reflects emotion! Here are some classic recipes from all over
          the world.
        </p>
        <Link to="/recipe">
          <button className="btn-order">Browse Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
