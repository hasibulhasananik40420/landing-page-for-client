import React from 'react'
import city from '../assets/Citi-logo 1.png'
const Footer = () => {
  return (
    <div className='bg-white font-Poppins'>

      <div className='max-w-7xl mx-auto px-6 py-10 lg:flex lg:items-center gap-10  lg:justify-between'>

        <div className=''>
          <img className='w-[100px] h-[56px]' src={city} alt="" />
          <h1 className='text-[#807D7D] font-[800] text-xl mt-3 ml-3'>Our Priority Partner</h1>
          <p className='text-[#807D7D] font-[300] mt-3 ml-3'>Be with the leader & connect the world!</p>
        </div>

        
        <div className='lg:ml-0 ml-3 lg:mt-0 mt-6'>
          <h1 className='font-extrabold text-[#0D0D0D] mb-3 text-xl'>About Us</h1>
          <p className='text-[#807D7D] font-medium'>About</p>
        </div>

        <div className='mr-24 lg:ml-0 ml-3 lg:mt-0 mt-6'>
          <h1 className='text-[#0D0D0D] font-extrabold text-xl mb-3'>Support</h1>
          <p className='text-[#807D7D] font-medium mb-3'>Help</p>
          <p className='text-[#807D7D] font-medium'>contact</p>

        </div>
        </div>

         <div>
          <p className='text-xm font-[500] text-[#807D7D] text-center mt-12 mb-8'>All rights reserved @ 2023</p>
         </div>

     

    </div>
  )
}

export default Footer