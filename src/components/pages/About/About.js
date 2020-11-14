import React from "react";
import Block from "../../Block";
import {
  ObjOne,
  TitleTwo,
  CrewOne,
  CrewTwo,
  CrewThree,
  CrewFour,
  CrewFive,
} from "./Data";
import Crew from "../../Crew";
import Title from "../../Title";

function About() {
  return (
    <>
      <Block {...ObjOne} />
      <Title {...TitleTwo} />
      <Crew {...CrewOne} />
      <Crew {...CrewTwo} />
      <Crew {...CrewThree} />
      <Crew {...CrewFour} />
      <Crew {...CrewFive} />
      <div className="later" style={{ padding: "40px" }}></div>
    </>
  );
}

export default About;
