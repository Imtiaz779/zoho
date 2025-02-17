import React from 'react'

const Charts = () => {
  return (
    <div className='bg-blue-800 h-150 text-white grid grid-cols-2'>
      
        <div className=' flex gap-5 justify-center items-center'>
            <h1 className='text-2xl'>100M+</h1>
            <p>Users Globally</p>
        </div>
        <div  className=' flex gap-5 justify-center items-center'>
            <h1 className='text-2xl'>150+</h1>
            <p>Countries Served</p>
        </div>
        <div className=' flex gap-5 justify-center items-center'>
            <h1 className='text-2xl'>15k+</h1>
            <p>Employees Worldwide</p>
        </div>
        <div className=' flex gap-5 justify-center items-center'>
            <h1 className='text-2xl'>25+</h1>
            <p>Years in Business</p>
        </div>
        <div className=' flex gap-5 justify-center items-center'>
            <h1 className='text-2xl'>55+</h1>
            <p>Products</p>
        </div>
        <button className='border-2 w-50 h-12 mt-25 ml-25'>
            More About ZOHO
        </button>
    </div>
  )
}

export default Charts