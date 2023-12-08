import React from "react";

const Education = () => {
  return (
    <div id="Education" className="h-[50%] md:mt-[1930px] mt-[2650px] absolute w-full flex flex-col border-b border-black">
      <div className="md:mx-20 p-2 m-2 mt-4 flex">
        <span className="text-black text-4xl font-semibold">Education &nbsp;</span>
        <span className="text-black text-lg font-semibold sm:visible md:visible invisible absolute">_________________________________________________________________________________________________________________________________________</span>
      </div>
      <div className="md:mx-20 p-2 m-2 md:mt-2 mt-0 grid md:grid-cols-2">
        <div className="flex flex-col m-2 p-2 border border-black">
          <div className="border-b border-black bg-gray-300">
            <span className="font-semibold">MCA - Master of Computer Application - 2011-2013 </span>
          </div>
          <div>
            <span className="font-medium">SASTRA UNIVERSITY - THANJAVUR</span>
          </div>
        </div>
        <div className="flex flex-col m-2 p-2 border border-black">
          <div className="border-b border-black bg-gray-300">
            <span className="font-semibold">BCA - Bachelor of Computer Application - 2011-2013 </span>
          </div>
          <div>
            <span className="font-medium">BHARATH COLLEGE - THANJAVUR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
