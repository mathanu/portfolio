import React from "react";

const Education = () => {
  return (
    <div className="h-[75%] mt-[1900px] absolute w-full flex flex-col border-b border-black">
      <div className="mx-20 p-2 m-2 mt-4 flex">
        <span className="text-black text-4xl font-semibold">Education</span>
      </div>
      <div className="mx-20 p-2 m-2 mt-5 grid grid-cols-2">
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
