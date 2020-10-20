import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";

function JoinUs() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default JoinUs;
