import React from 'react'
import images01 from "../assets/images01.webp"
import { GoDash } from "react-icons/go";
import { PiGreaterThan } from "react-icons/pi";
import FeaturedApps from './FeaturedApps';

const Paragraph = () => {
  return (
    <div className='mt-20 container grid lg:grid-cols-2 bg-[#F8F9FB] '>
   
    <div className='flex flex-col justify-center text-center '>
        <h1 className='text-5xl '>Your life's work,<br /> powered by our life's work</h1>
       <div className='flex flex-col justify-content items-center text-red-500 mt-5'>
       <GoDash />
       </div>
        <p className='text-2xl m-8'>A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy..</p>
        <div className='flex gap-4 items-center  justify-center'>
          
            <button className='bg-[#F60014] h-12 w-60  text-white flex justify-center items-center gap-5'
            >GET STARTED FOR FREE<PiGreaterThan />
            </button>
        </div>

        <img src={images01} alt="" className='w-500 h-50  rounded-full'  />
    </div> 
    <FeaturedApps/>
    </div>
  )
}

export default Paragraph