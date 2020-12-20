import React from "react";
import "./Items.css";
import Item from "./Item";

const Items = (item) => {
  var rows = [];

  var i = 0;
  while (item[i] != null) {
    rows.push(item[i]);
    i++;
  }

  return (
    <>
      <div className="item-cont">
        {rows.map((item1) => (
          <Item {...item1} />
        ))}

        {/* <Item /> */}
      </div>
    </>
  );
};

export default Items;
