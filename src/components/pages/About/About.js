import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";

function About() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default About;
