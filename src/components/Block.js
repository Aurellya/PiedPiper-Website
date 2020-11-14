import React from "react";
import "./Block.css";
// import { Link } from "react-router-dom";

function Block({ lightBg, lightTextDesc, description, img, alt, imgStart }) {
  return (
    <>
      <div
        className={
          lightBg ? "home__hero-section2" : "home__hero-section2 darkBg"
        }
      >
        <div className="container">
          <div
            className="home__hero-row2"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "column-reverse" : "column",
            }}
          >
            <div className="col col1">
              <div className="home__hero-text-wrapper2">
                {description.map((item) => (
                  <p
                    className={
                      lightTextDesc
                        ? "home__hero-subtitle2"
                        : "home__hero-subtitle2 dark"
                    }
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="col col2">
              <div className="home__hero-img-wrapper2">
                <img src={img} alt={alt} className="home__hero-img2" />
              </div>
            </div>
            <div className="title">
              <h1>About Us</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Block;
