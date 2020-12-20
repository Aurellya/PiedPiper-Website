import React from "react";
import Title from "../../Title";
import { TitleOne, NewsItem } from "./Data";

function NewsContent() {
  return (
    <>
      <p>hi</p>
      <p>hi</p>
      <div style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <Title {...TitleOne} />
        <Items {...NewsItem} />
      </div>
    </>
  );
}

export default NewsContent;
