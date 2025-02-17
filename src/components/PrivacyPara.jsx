import React from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const privacyPara = () => {
  return (
    <div className='grid place-items-center'>

     <div className='mt-10 text-4xl'> <IoShieldCheckmarkOutline /></div>

      <h1 className='text-2xl '>Your privacy is our responsibility</h1>

      <p className='text-center font-semibold m-5'>We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly do not bank on advertising-based business models. The only way we make money is from the software license fees you pay us.</p>

      <button className='border-2 w-40 h-15 m-5 text-blue-500'>Watch Video</button>
    </div>
  )
}

export default privacyPara