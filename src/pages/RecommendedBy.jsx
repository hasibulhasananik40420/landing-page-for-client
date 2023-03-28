import React from 'react'


function RecommendedBy() {
    return (
        <div className='bg-[#FFF8F1] py-6 mx-2 '>


        <div className='font-Poppins  max-w-7xl mx-auto '>
            <div className='flex gap-5 items-center justify-center'>
            <div className='h-[2px] w-full bg-[#F05830] max-w-xs'></div>
                <h3 className='md:text-2xl text-xl font-extrabold text-gray-700 min-w-max'>Recommended By</h3>
                <div className='h-[2px] w-full bg-[#F05830] max-w-xs'></div>
            </div>


            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center content-between items-center my-5 p-2'>
            <img className='block ' src="https://i.ibb.co/gtPWvqY/Vector.png" alt="" />
            <img className='block ' src="https://i.ibb.co/3FCxk3s/Vector-1.png" alt="" />
            <img className='block ' src="https://i.ibb.co/4MdQQNq/Group.png" alt="" />
            <img className='block ' src="https://i.ibb.co/NTXZW5M/bitmex-1.png" alt="" />
            </div>
           
        </div>
        </div>
    )
}


export default RecommendedBy