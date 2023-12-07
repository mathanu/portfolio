import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderCmp = () => {
  return (
    <div className="w-full z-20 md:flex md:justify-between fixed top-0 border-b border-black h-20 bg-yellow-400">
      <div className="m-2 -mt-1 md:mx-12 md:p-2 md:h-full md:w-full">
           <span className="h-3 flex"><span className="h-3 flex"><FontAwesomeIcon icon={["fa", "phone"]} className="h-5 w-4 m-1"/>  - 9629633227</span> </span>
           
           <span className="h-3 flex mt-4"><span className="h-3 flex"><FontAwesomeIcon icon={["fa", "envelope"]} className="h-5 w-4 m-1"/>  - mathanu27@yahoo.com</span> </span>
      </div>
      <div className="mt-2">
        <ul className="md:flex md:p-2 md:mx-52 md:m-2 md:text-base md:font-medium">
          <li className="px-4  hover:text-yellow-500 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4  hover:text-yellow-500 cursor-pointer">
            <Link href="/experience">Experience</Link>
          </li>
          <li className="px-4  hover:text-yellow-500 cursor-pointer">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="px-4  hover:text-yellow-500 cursor-pointer">
            <Link href="/lifestyle">Education</Link>
          </li>
          <li className="px-4  hover:text-yellow-500 cursor-pointer">
            <Link href="/technology">Download</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderCmp;
