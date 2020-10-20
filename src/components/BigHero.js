import React from "react";
import "./BigHero.css";
import Particles from "react-particles-js";

function BigHero({ lightBg, lightText, lightTextDesc, headline, description }) {
  const parameter = {
    particles: {
      color: { value: "white" },
      line_linked: {
        opacity: 0.3,
      },
      number: { value: 70 },
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
            <h1 className={lightText ? "heading" : "heading dark "}>
              {headline}
            </h1>
            {/* <div className="rect-bottom"></div> */}
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
