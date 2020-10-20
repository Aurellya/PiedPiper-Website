import React from "react";
import "./BigHero.css";
import Particles from "react-particles-js";

function BigHero({ lightBg, lightText, lightTextDesc, headline, description }) {
  const parameter = {
    particles: {
      color: "blue",
      number: {
        value: 70,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };

  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div className="text-box">
            <h1 className={lightText ? "heading" : "heading dark"}>
              {headline}
            </h1>
            <p
              className={
                lightText
                  ? "home__main-hero-subtitle"
                  : "home__main-hero-subtitle dark"
              }
            >
              {description}
            </p>
          </div>
        </div>
        <Particles
          className="particles-bg"
          type="random"
          bg={true}
          params={parameter}
        />
      </div>
    </>
  );
}

export default BigHero;
