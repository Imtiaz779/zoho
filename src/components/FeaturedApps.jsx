import React from "react";
import crm from "../assets/crm.svg";
import desk from "../assets/desk.svg";
import mail from "../assets/mail.svg";
import people from "../assets/people.svg";
import book from "../assets/book.webp";
import { PiGreaterThan } from "react-icons/pi";

const FeaturedApps = () => {
  return (
    <div className="flex justify-center items-center h-full w-full  bg-[#F8F9FB]">
      <div className="w-100 h-180 rounded  bg-white flex justify-start items-start mt-5 mb-10">
        <div className="mt-3 ml-2">
          <h1>FEATURED APPS</h1>
          <div className="">
         <div className="flex gap-10 mb-5">
         <img className="h-10 w-20" src={crm} alt="" />
         <div>
         <h1 className=" text-2xl">CRM</h1>
         <p>Comprehensive CRM Platform for customer-facing teams.</p>
         </div>
        <div className="text-2xl mt-12 pr-6"> <PiGreaterThan/></div>
         </div>
          <div className="flex gap-10 mb-5">
          <img className="h-10 w-20" src={mail} alt="" />
          <div>
          <h1 className=" text-2xl">Mail</h1>
          <p>Secure email service for teams of all sizes.</p>
          </div>
          <div className="text-2xl mt-12 pr-6"> <PiGreaterThan/></div>
          </div>
         <div className="flex gap-10 mb-5">
         <img className="h-10 w-20" src={desk} alt="" />
          <div>
          <h1 className=" text-2xl">Desk</h1>
          <p>Helpdesk software to deliver great customer support.</p>
          </div>
          <div className="text-2xl mt-12 pr-6"> <PiGreaterThan/></div>
         </div>
          <div className="flex gap-15 mb-5">
          <img className="h-10 w-20" src={book} alt="" />
         <div>
         <h1 className=" text-2xl">Books</h1>
         <p>Powerful accounting platform for growing business.</p>
         </div>
         <div className="text-2xl mt-12 pr-6"> <PiGreaterThan/></div>
          </div>
          <div className="flex gap-10 mb-5">
          <img className="h-10 w-20" src={people} alt="" />
          <div>
          <h1 className=" text-2xl">People</h1>
          <p>Organize, automate and simplify your HR.</p>
          </div>
          <div className="text-2xl mt-12 pr-6"> <PiGreaterThan/></div>
          </div>
          <hr className="text-blue-200" />
          <div className="flex justify-between gap-15 mb-5 mt-4">
         <div>
         <h1 className=" text-2xl text-blue-400">Explore All Products</h1>
         
         </div>
         <div className="text-2xl text-blue-300 mt-2   pr-6"> <PiGreaterThan/></div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FeaturedApps;

//<IoMailOpenOutline />
