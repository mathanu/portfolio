import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

const HomeCmp = () => {
  return (
    <div>
    <div className="md:h-[75%] h-[50%] absolute mt-20 w-full bg-yellow-400  flex border-b border-black">
      <div className="w-6/12">
      <div className="md:mx-20 md:mt-20 flex mx-2">
      <span> <Link target="_blank" href="https://www.linkedin.com/in/mathan-j-65aa64a9/"><FontAwesomeIcon className= "h-8 w-8 m-2" color="blue" icon={["fab", "linkedin"]} /> </Link> </span>
      <span> <Link target="_blank" href="https://github.com/mathanu"><FontAwesomeIcon icon={["fab", "github"]} className= "h-8 w-8 m-2"/></Link></span> 
      </div>
      <div className="md:mx-20 p-2 m-2 mt-2">
          <span className="text-black font-semibold md:text-6xl text-4xl">Hello,</span>
          </div>
        <div className="md:mx-20 p-2 m-2 mt-2">
          <span className="text-black font-semibold md:text-6xl text-4xl">I'm Mathan Jayapal</span>
        </div>
        <div className="md:mx-20 p-2 m-2">
          <span className="text-black text-2xl">Full Stack Developer..!</span>
        </div>
      </div>
      <div className="w-6/12">
        <div className="h-2 mt-8 ml-72">
          <img
            src="https://i.ibb.co/0QrCndq/my-photo-modified-cropped.png"
            alt="my-photo-modified-cropped"
            className="rounded-full"
            border="0"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeCmp;
