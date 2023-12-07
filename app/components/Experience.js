import React from "react";

const Experience = () => {
  return (
    <div className="h-full md:mt-[1232px] mt-[1302px] absolute w-full flex flex-col ">
        <div className="mx-20 p-2 m-2 mt-4 flex">
          <span className="text-black text-3xl font-semibold">Experience &nbsp;</span>
          <span className="text-black text-lg font-semibold sm:visible md:visible invisible">____________________________________________________________________________________________________________________________________</span>
          </div>
        <div className="md:mx-20 p-2 m-2 md:mt-10 grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col m-2 p-2 border border-black">
            <div className="border-b border-black bg-gray-300">
              <span className="font-semibold">Contus Tech - Works @ IFF - </span>
              <span>June 2021 - present</span>
            </div>
            <div>
            <span className="font-medium">Senior Application Developer</span>              
            </div>
            <div className="flex flex-col">
            <span>- Developed React TV Application</span>
            <span>- Worked on Vplayed Product</span>
            <span>- Rest API development using nest js </span>
            <span>- AWS Lambda function development </span>
            <span>- SQS </span>
            <span>- Logs application using Angular 11 </span>
            <span>- Code reviewing </span>
            </div>
          </div>
          <div className="flex flex-col m-2 p-2 border border-black">
            <div className="border-b border-black bg-gray-300">
              <span className="font-semibold">Matrimony.com - </span>
              <span>May 2018 - May 2021</span>
            </div>
            <div>
            <span className="font-medium">Senior Software Engineer</span>              
            </div>
            <div className="flex flex-col">
            <span>- API development using node and php</span>
            <span>- Converting PHP api to Node express api to reduce latency</span>
            <span>- converting php site to angular from scratch </span>
            <span>- Code review </span>
            </div>
          </div>     <div className="flex flex-col m-2 p-2 border border-black">
            <div className="border-b border-black bg-gray-300">
              <span className="font-semibold">Imaginet Ventures Pvt Ltd - </span>
              <span>March 2016 - April 2018</span>
            </div>
            <div>
            <span className="font-medium">Software Engineer</span>              
            </div>
            <div className="flex flex-col">
            <span>- Working closely with analysts, designers and staff</span>
            <span>- Producing detailed specifications and writing the programme codes</span>
            <span>- API development in node and PHP codeignitor </span>
            <span>- Direct coordination with client - invidual developer </span>
            <span>- Maintaining the systems once they are up and running </span>
            </div>
          </div>     <div className="flex flex-col m-2 p-2 border border-black">
            <div className="border-b border-black bg-gray-300">
              <span className="font-semibold">Asterfone technologies - </span>
              <span>Dec 2014 - Feb 2016</span>
            </div>
            <div>
            <span className="font-medium">Software Developer</span>              
            </div>
            <div className="flex flex-col">
            <span>- API development in PHP</span>
            <span>- Worked on call center product</span>
            <span>- Bug fix in existing product </span>
            <span>- Maintaining the deployed projects </span>
            </div>
          </div>     <div className="flex flex-col m-2 p-2 border border-black">
            <div className="border-b border-black bg-gray-300">
              <span className="font-semibold"> Dell International pvt ltd - </span>
              <span>May 2013 - May 2014</span>
            </div>
            <div>
            <span className="font-medium">Process Associate</span>              
            </div>
            <div className="flex flex-col">
            <span>- Payment Processing team</span>
            </div>
          </div>
         
        </div>
    </div>
  );
};

export default Experience;
