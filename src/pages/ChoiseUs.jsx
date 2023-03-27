import React from 'react'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2 (2).png'
import icon3 from '../assets/Shield dark.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/Shield blue.png'
const ChoiseUs = () => {
  return (
    <div className='font-Poppins bg-[#FFF8F1]'>

       <div className='mx-auto max-w-7xl pb-12 pt-12'>
       <h1 className='text-[#0D0D0D] font-[800] text-[40px] text-center'>Why Choose Us</h1>
       <p className='text-[17px] text-[#807D7D] font-[300] text-center mt-3' >A array of reasons to select us!</p>


         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:w-[90%] pt-20 mx-auto  justify-items-center'>
            <div className='w-[340px] h-[230px] shadow-2xl flex flex-col justify-center items-center rounded-lg'>
              <span className='h-14 w-14 flex justify-center items-center bg-[#E6FDF6] rounded-lg'> <img src={icon1} alt="" /></span>
              <h1 className='text-[#0D0D0D] font-[800] text-[20px] mt-3'>Digital Saving</h1>
              <p className='text-[15px] text-[#807D7D] font-[300] mt-3'>Saving on the way and simple!</p>
           
            </div>
            
             <div className='w-[340px] h-[230px]  flex flex-col justify-center items-center rounded-lg'>
              <span className='h-14 w-14 flex justify-center items-center bg-[#FEEFEB] rounded-lg'> <img src={icon2} alt="" /></span>
              <h1 className='text-[#0D0D0D] font-[800] text-[20px] mt-3'>Digital Saving</h1>
              <p className='text-[15px] text-[#807D7D] font-[300] mt-3'>Saving on the way and simple!</p>
           
            </div>
            
             <div className='w-[340px] h-[230px] flex flex-col justify-center items-center rounded-lg'>
              <span className='h-14 w-14 flex justify-center items-center bg-[#E6FDF6] rounded-lg'> <img src={icon3} alt="" /></span>
              <h1 className='text-[#0D0D0D] font-[800] text-[20px] mt-3'>Digital Saving</h1>
              <p className='text-[15px] text-[#807D7D] font-[300] mt-3'>Saving on the way and simple!</p>
           
            </div> <div className='w-[340px] h-[230px] flex flex-col justify-center items-center rounded-lg'>
              <span className='h-14 w-14 flex justify-center items-center bg-[#ECF3F1] rounded-lg'> <img src={icon4} alt="" /></span>
              <h1 className='text-[#0D0D0D] font-[800] text-[20px] mt-3'>Digital Saving</h1>
              <p className='text-[15px] text-[#807D7D] font-[300] mt-3'>Saving on the way and simple!</p>
           
            </div> <div className='w-[340px] h-[230px] flex flex-col justify-center items-center rounded-lg'>
              <span className='h-14 w-14 flex justify-center items-center bg-[#E6FDF6] rounded-lg'> <img src={icon5} alt="" /></span>
              <h1 className='text-[#0D0D0D] font-[800] text-[20px] mt-3'>Digital Saving</h1>
              <p className='text-[15px] text-[#807D7D] font-[300] mt-3'>Saving on the way and simple!</p>
           
            </div> <div className='w-[340px] h-[230px] flex flex-col justify-center items-center rounded-lg'>
              <span className='h-14 w-14 flex justify-center items-center bg-[#EBF3FE] rounded-lg'> <img src={icon6} alt="" /></span>
              <h1 className='text-[#0D0D0D] font-[800] text-[20px] mt-3'>Digital Saving</h1>
              <p className='text-[15px] text-[#807D7D] font-[300] mt-3'>Saving on the way and simple!</p>
           
            </div>
         </div>
       </div>
    </div>
  )
}

export default ChoiseUs