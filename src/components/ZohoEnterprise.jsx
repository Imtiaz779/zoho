import React from 'react'
import illus from '../assets/illus.svg'
import poster2 from '../assets/poster2.png'
import { ImYoutube } from "react-icons/im";


const ZohoEnterprise = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-5 mt-10 p-10'>
        <div className='grid place-items-center gap-10'>
        <h1 className='font-bold text-2xl '>Zoho for Enterprise</h1>
        <p className='text-semibold'>Experience the breadth and depth of the Zoho ecosystem, with the professional services, infrastructure, support, and security that a large business needs. Streamline complex business processes, build strong relationships with your customers, and drive growth at scale.</p>
        <button className='text-2xl text-white  bg-blue-500 w-50 h-10'>Get in touch</button>
        </div>
        <div>
        <img className='w-150 ' src={illus} alt="" />
       <div className=''>
       <div className='flex justify-between items-center'>
       <div className=''>
       <p className='text-2xl m-5'>"Zoho's operating system is very robust and contains the collective memory of Selectra's entire business."</p>
        <h1 className='font-semibold ml-5'>Aurian De Maupeou</h1>
        <h1 className='ml-5'>Co-Founder, Selectra</h1>
       </div>
        <div className=''>
        <img className='w-60 ' src={poster2} alt="" />
        <ImYoutube />
        <p>Watch our video</p>
        </div>

       </div>
       </div>
        </div>

    </div>
  )
}

export default ZohoEnterprise