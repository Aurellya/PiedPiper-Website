import React from "react";
import { Link } from "react-router";
import "./Item.css";

function Item(item) {
  return (
    <>
      <Link to="/react">
        <div className={item.title == null ? "box hide" : "box"}>
          <div className="image">
            <img src={item.img} alt={item.alt} />
          </div>

          <div className="text">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Item;
