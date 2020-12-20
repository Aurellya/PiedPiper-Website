import React from "react";
import "./Items.css";
import Item from "./Item";

const Items = (item) => {
  return (
    <>
      <div className="item-cont">
        <Item {...item[0]} />
        <Item {...item[1]} />
        <Item {...item[2]} />
        <Item {...item[3]} />
        <Item {...item[4]} />
        <Item />
      </div>
    </>
  );
};

export default Items;
