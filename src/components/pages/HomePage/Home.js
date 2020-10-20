import React from "react";
import BigHero from "../../BigHero";
import HeroSection from "../../HeroSection";
import Category from "../../Category";
import {
  mainObj,
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "./Data";

function Home() {
  return (
    <>
      <BigHero {...mainObj} />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Category />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
