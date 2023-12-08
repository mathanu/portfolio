import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
library.add(far,fas,fab);
import React from "react";

const Skills = () => {
  return (
    <div id="Skills" className="h-[50%] md:mt-[650px] mt-[600px] absolute w-screen flex flex-col ">
        <div className="md:mx-20 p-2 m-2 mt-4 flex w-screen">
          <span className="text-black text-4xl font-semibold">Skills &nbsp;</span>
          <span className="text-black text-lg font-semibold sm:visible md:visible invisible absolute">______________________________________________________________________________________________________________________________________________</span>
        </div>
        <div className="md:mx-20 md:p-2 md:m-2 md:mt-10 md:grid md:grid-cols-5 grid grid-cols-2">
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','js']} flip size="6x"  />Javascript</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','node']} size="6x"/>NodeJS</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','react']} spin size="6x"/>ReactJS</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','js']} shake size="6x"/>NestJS</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','php']} bounce size="6x"/>PHP</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','html5']} flip size="6x"/>HTML</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','css3']} size="6x"/>CSS</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fa','code']} fade size="6x"/>Rest API</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','angular']} size="6x"/>Angular JS</span>
          <span className="text-black md:text-lg font-medium p-2 m-4 md:h-32 md:w-32 h-20 w-20 "><FontAwesomeIcon icon={['fab','github']} flip size="6x"/>GitHub</span>
          
        </div>
    </div>
  );
};

export default Skills;
