import React from "react";
import Items from "../../Items";
// import { ItemOne } from "./Data";
import Title from "../../Title";
import { TitleOne, NewsItem } from "./Data";

function News() {
  return (
    <>
      <div style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <Title {...TitleOne} />
        <Items {...NewsItem} />
      </div>
    </>
  );
}

export default News;
