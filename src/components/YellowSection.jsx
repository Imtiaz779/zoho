import React from "react";
import logo from "../assets/logo.jfif";
import { PiGreaterThan } from "react-icons/pi";
import { FaQuoteLeft } from "react-icons/fa";
import poster from "../assets/poster.png";
const YellowSection = () => {
  return (
    <div
      className=" lg:flex justify-center items-center
    bg-[#FED600] mb-6"
    >
      <div className="grid place-items-center gap-3">
        <img src={logo} alt="" />

        <p>All-in-one suite</p>
        <h1 className="font-semibold text-3xl">Zoho One</h1>
        <p className="text-center">The operating system for business
<br />
       
          Run your entire business on Zoho with our unified cloud software,
          designed to help you break down silos between departments and increase
          organizational efficiency.
        </p>

        <button className="bg-[#F60014] h-12 w-60  text-white flex justify-center items-center gap-5">
          TRY ZOHO ONE
          <PiGreaterThan />
        </button>
      </div>

      <div>
        <p className="grid place-items-center gap-5 mt-5">
          <FaQuoteLeft />
        </p>
        <p className="m-5  text-center text-2xl">
          "Zoho continues to modify, adapt, grow, and add things to the platform
          that our business sees value in."
        </p>
       <div className="grid place-items-center">
       <div className="w-20 mt-5 ">
          <img src={poster} alt="" />
        </div>
        <div className="pl-20 m-10 ">
          <h1>Paul Grimes</h1>
          <h2>Chief Operating Officer,</h2>
          <h2>Lubrication Engineers</h2>
        </div>
       </div>
      </div>
    </div>
  );
};

export default YellowSection;
