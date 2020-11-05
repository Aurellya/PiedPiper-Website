import React from "react";
import { Button } from "./Button";
import "./Category.css";
import { IconContext } from "react-icons/lib";
import { GiFireZone, GiBrutalHelm, GiImperialCrown } from "react-icons/gi";
import { Link } from "react-router-dom";

function Category() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="category__section">
        <div className="category__wrapper">
          <h1 className="category__heading">Subscription</h1>
          <div className="category__container">
            <Link to="/sign-up" className="category__container-card">
              <div className="category__container-cardInfo">
                <div className="icon">
                  <GiFireZone />
                </div>
                <h3>Silver</h3>
                <h4>$19.99</h4>
                <p>per month</p>
                <ul className="category__container-features">
                  <li>1 Add-on</li>
                  <li>1 User</li>
                  <li>Free Support 24/7</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="category__container-card">
              <div className="category__container-cardInfo">
                <div className="icon">
                  <GiBrutalHelm />
                </div>
                <h3>Gold</h3>
                <h4>$49.99</h4>
                <p>per month</p>
                <ul className="category__container-features">
                  <li>10 Add-ons</li>
                  <li>10 Users</li>
                  <li>Free Support 24/7</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="secondary">
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="category__container-card">
              <div className="category__container-cardInfo">
                <div className="icon">
                  <GiImperialCrown />
                </div>
                <h3>Platinum</h3>
                <h4>$120.99</h4>
                <p>per month</p>
                <ul className="category__container-features">
                  <li>All Add-ons</li>
                  <li>Unlimited Users</li>
                  <li>Free Support 24/7</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Category;
