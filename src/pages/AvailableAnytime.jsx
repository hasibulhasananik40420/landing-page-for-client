import React from 'react'
import bg from '../assets/lastbg.png'
import round from '../assets/round.png'


function AvailableAnytime() {
    return (
        <div className='bg-[#FFF8F1] py-3'>


        <div className='font-Poppins  max-w-7xl mx-auto '>
                <div className='flex md:flex-row flex-col w-full overflow-hidden min-h-[60vh] my-3 items-center gap-4 '>
                        <div className='w-full h-full'>
                            <h2 className='md:text-4xl text-2xl font-extrabold text-gray-700 text-center md:text-left md:ml-16 '>Available Anytime!</h2>
                            <h2 className='text-lg  text-gray-700 my-4 text-center md:text-left md:ml-16'>Access your account anytime and anywhere. Be confident and fearless with our system!</h2>
                        </div>
                        <div className='w-full h-full  flex justify-end'>
                            <div className='relative top-0 md:w-[475px] md:h-[370px] w-[352px] h-[277px]  bg-no-repeat bg-cover bg-last-bg'>
                                <img className='md:absolute  right-6 top-0 md:h-[320px] ' src={round} />
                            </div>




                        </div>
                </div>
        </div>
        </div>
    )
}


export default AvailableAnytime