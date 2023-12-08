'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free'
import {library} from '@fortawesome/fontawesome-svg-core'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'

library.add(far,fas,fab);

const HeaderCmp = () => {

  const [showMenu, setShowMenu] = useState(false)

  const scroll2El = elID => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 60,
      behavior: 'smooth',
    });
  };

const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute('goto');
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  }

const showMenuFunc = () => {
  setShowMenu(!showMenu)
}
  return (
    <div className="md:w-full w-screen z-20 md:flex md:justify-between fixed top-0 border-b border-black h-20 bg-yellow-400">
      <div className="m-2 md:mx-12 md:p-2 md:h-full md:w-full mt-2">
        <span className="h-3 flex">
          <span className="h-3 flex">
            <FontAwesomeIcon icon={["fa", "phone"]} className="h-5 w-4 m-2" /> -
            9629633227
          </span>{" "}
        </span>
        <span className="h-3 flex mt-4">
          <span className="h-3 flex">
            <FontAwesomeIcon
              icon={["fa", "envelope"]}
              className="h-5 w-4 m-2"
            />{" "}
            - mathanu27@yahoo.com
          </span>{" "}
        </span>
      </div>
      <div className="md:invisible visible float-right -mt-10 mr-4">
        <span className="h-8 w-8" onClick={showMenuFunc} >
          <FontAwesomeIcon className="h-8 w-8" icon={["fa", "bars"]} />
        </span>
      </div>
     { showMenu &&<div className="md:invisible w-screen">
      <ul className="md:p-2 md:mx-52 p-4 md:m-2 md:text-base md:font-medium absolute bg-black z-10 w-full">
          <li className="px-4 hover:text-yellow-500 p-2 text-white cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4  hover:text-yellow-500 p-2 text-white cursor-pointer" onClick={onBtnClick}>
            <Link goto="Experience" href="/#experience">Experience</Link>
          </li>
          <li className="px-4  hover:text-yellow-500 p-2 text-white cursor-pointer" onClick={onBtnClick}>
            <Link goto="Skills" href="/#skills">Skills</Link>
          </li>
          <li className="px-4  hover:text-yellow-500 p-2 text-white cursor-pointer" onClick={onBtnClick}>
            <Link goto="Education" href="/#lifestyle">Education</Link>
          </li>
          <li className="px-4  hover:text-yellow-500 p-2 text-white cursor-pointer">
            <Link target="_blank" href="/resume.pdf">
              <FontAwesomeIcon
                icon={["fa", "download"]}
                className="h-4 w-4 hover:text"
              />
            </Link>
          </li>
        </ul>
      </div> }

      <div className="mt-2 sm:invisible md:visible invisible">
        <ul className="flex md:p-2 md:mx-52 md:m-2 md:text-base md:font-medium">
          <li className="px-4 hover:text-red-500 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4  hover:text-red-500 cursor-pointer " onClick={onBtnClick}>
            <Link goto="Experience" href="/#experience" >Experience</Link>
          </li>
          <li className="px-4  hover:text-red-500 cursor-pointer" onClick={onBtnClick}>
            <Link goto="Skills" href="/#skills">Skills</Link>
          </li>
          <li className="px-4  hover:text-red-500 cursor-pointer" onClick={onBtnClick}>
            <Link goto="Education" href="/#lifestyle">Education</Link>
          </li>
          <li className="px-4  hover:text-red-500 cursor-pointer" >
            <Link target="_blank" href="/resume.pdf">
              <FontAwesomeIcon
                icon={["fa", "download"]}
                className="h-4 w-4 hover:text"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderCmp;
