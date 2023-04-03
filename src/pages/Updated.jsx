import React from 'react'
const Updated = () => {
    return (
        <div className="bg-updated-image h-[410px] w-full bg-cover bg-center bg-no-repeat font-Poppins ">
          <div className='flex flex-col justify-center items-center gap-y-8 max-w-7xl mx-auto'>
          <h1 className='text-white font-[800] text-[40px] mt-16 text-center'>Ready to get updated?</h1>
            <p className='text-[20px] font-[300] text-[#E6EFEC]'>Get every update into your inbox!</p>

             <div className=''>
                <input className=' pl-5 border border-[#E6EFEC] h-[45px] lg:w-[400px] w-full rounded rounded-r-none outline-none' type="text" placeholder='Email Address'/>
                 <button className='bg-[#F05830] h-[45px] w-[150px] font-semibold text-white rounded rounded-l-none lg:mt-0 mt-4 lg:ml-0 ml-32'>Submit</button>
             </div>

          </div>
        </div>
    )
}

export default Updated