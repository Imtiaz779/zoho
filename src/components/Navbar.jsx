import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { MdMonitor } from "react-icons/md";
import images from "../assets/images.png"
const Navbar = () => {
  return (
    <div className="">
      <div className=" flex justify-between items-center">
        <div className="">
        <img src={images} alt="" className='w-25 pl-5 rounded-full'  />
        </div>

        <div className="flex lg:hidden justify-center items-center ">
          <ul className=" flex  gap-5">
            <li className=" hover:border-b-2  ">Products</li>
            <li className=" hover:border-b-2  ">Customers</li>
            <li className="hover:border-b-2  ">Company</li>
            <li className="hover:border-b-2 mt-2  "><BsThreeDots/></li>
          </ul>
          
        </div>

       <div className="flex justify-between items-center">
       <div className=" flex justify-center items-center gap-5 ">
        <CiSearch />
        <MdMonitor />
        </div>
        <div>
          <p class="px-6 py-2 text-red-500 hover:border-b-2">Sign In</p>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
