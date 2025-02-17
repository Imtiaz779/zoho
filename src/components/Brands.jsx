import React from 'react'
import amazon from "../assets/amazon.svg"
import kpmg from '../assets/kpmg.svg'
import renault from '../assets/renault.svg'
import netflix from '../assets/netflix.svg'
import hp from '../assets/hp.svg'
import facebook from '../assets/facebook.svg'
import { PiGreaterThan } from 'react-icons/pi'
const Brands = () => {
  return (
   <div className='bg-[#F8F9FB] p-15 grid place-items-center'>
    <div className='m-10 grid place-items-center text-2xl font-semibold '>Brands That Trust Us</div>
   <div className='m-10  flex gap-8'>
   <img className='w-25'src={amazon} alt="" />
    <img className='w-25' src={kpmg} alt="" />
    <img className='w-25' src={renault} alt="" />
    <img className='w-25' src={netflix} alt="" />
    <img className='w-25' src={hp} alt="" />
   </div>
   <div className=' flex justify-center items-center '>
    <img className='w-20' src={facebook} alt="" />
   </div>
   <div className="flex justify-center items-center gap-4 font-semibold text-2xl text-blue-800 mt-5">
   <h1 className=''>Customer Stories
   </h1>
<div className='mt-2'>    <PiGreaterThan/>
</div>    </div>
   </div>
  )
}

export default Brands