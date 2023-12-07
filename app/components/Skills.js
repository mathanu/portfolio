import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skills = () => {
  return (
    <div className="h-[50%] md:mt-[650px] mt-[520px] absolute w-full  flex flex-col k">
        <div className="mx-20 p-2 m-2 mt-4 flex">
          <span className="text-black text-4xl font-semibold">Skills &nbsp;</span>
          <span className="text-black text-lg font-semibold sm:visible md:visible invisible">______________________________________________________________________________________________________________________________________________</span>
        </div>
        <div className="md:mx-20 md:p-2 md:m-2 md:mt-10 md:grid md:grid-cols-5 grid grid-cols-2">
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','js']} flip  />Javascript</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','node']}/>NodeJS</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','react']}/>ReactJS</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','js']}/>NestJS</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','php']}/>PHP</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','html5']}/>HTML</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','css3']}/>CSS</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fa','code']}/>Rest API</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','angular']}/>Angular JS</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','github']}/>GitHub</span>
          
        </div>
    </div>
  );
};

export default Skills;
