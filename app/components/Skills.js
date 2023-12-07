import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skills = () => {
  return (
    <div className="h-[50%] mt-[621px] absolute w-full  flex flex-col k">
        <div className="mx-20 p-2 m-2 mt-4 flex">
          <span className="text-black text-4xl font-semibold">Skills &nbsp;</span>
          <span className="text-black text-lg font-semibold">______________________________________________________________________________________________________________________________________________</span>
        </div>
        <div className="mx-20 p-2 m-2 mt-10  grid grid-cols-5">
          <span className="text-black text-lg font-medium p-2 m-4 h-32 w-32 "><FontAwesomeIcon icon={['fab','js']} flip  />Javascript</span>
          <span className="text-black text-lg font-medium p-2 m-4 h-32 w-32 "><FontAwesomeIcon icon={['fab','node']}/>NodeJS</span>
          <span className="text-black text-lg font-medium p-2 m-4 h-32 w-32 "><FontAwesomeIcon icon={['fab','react']}/>ReactJS</span>
          <span className="text-black text-lg font-medium p-2 m-4 h-32 w-32 "><FontAwesomeIcon icon={['fab','js']}/>NestJS</span>
          <span className="text-black text-lg font-medium p-2 m-4 h-32 w-32 "><FontAwesomeIcon icon={['fab','php']}/>PHP</span>
          <span className="text-black text-lg font-medium p-2 m-4 h-32 w-32 "><FontAwesomeIcon icon={['fab','html5']}/>HTML</span>
          <span className="text-black text-lg font-medium p-2 m-4 h-32 w-32 "><FontAwesomeIcon icon={['fab','css3']}/>CSS</span>
          <span className="text-black text-lg font-medium p-2 m-4 h-32 w-32 "><FontAwesomeIcon icon={['fa','code']}/>Rest API</span>
          <span className="text-black text-lg font-medium p-2 m-4 h-32 w-32 "><FontAwesomeIcon icon={['fab','angular']}/>Angular JS</span>
          <span className="text-black text-lg font-medium p-2 m-4 h-32 w-32 "><FontAwesomeIcon icon={['fab','github']}/>GitHub</span>
          
        </div>
    </div>
  );
};

export default Skills;
