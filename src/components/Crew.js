import React from "react";
import "./Crew.css";
// import { Link } from "react-router-dom";

function Crew({
  lightBg,
  lightTextDesc,
  name,
  alias,
  position,
  description,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBg ? "home__hero-section3" : "home__hero-section3 darkBg"
        }
      >
        <div className="container">
          <div
            className="home__hero-row3"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col col3">
              <div className="home__hero-text-wrapper">
                <h2 style={{ marginBottom: "10px" }}>{name}</h2>
                <p class="alias">{alias}</p>
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
                  {position}
                </h3>
                <p
                  style={{ fontSize: "17px" }}
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle2"
                      : "home__hero-subtitle2 dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="col col4">
              <div className="home__hero-img-wrapper3">
                <img src={img} alt={alt} className="home__hero-img3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crew;
