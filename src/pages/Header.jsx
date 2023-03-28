import React from 'react'
import union from '../assets/Union.png'
const Header = () => {
    return (
        <div className='bg-[#FFF8F1] '>

            <div className='font-Poppins  max-w-7xl mx-auto '>


                <div className='lg:flex lg:justify-between lg:items-center lg:h-[100vh]'>
                    <div className='lg:w-[600px] w-full lg:ml-16 p-0 lg:p-0'>
                        <h1 className='text-[#0D0D0D] font-[800] lg:text-[45px] text-[35px] lg:w-full w-[320px]'>Save Time and Start Digital Wallet!</h1>

                        <p className='text-[#807D7D] font-[300] text-[20px] pt-6'>Get the world leading system of escrow financing!</p>

                        <div className='lg:flex gap-3 pt-12 lg:w-full w-[200px] mx-auto'>
                            <button className='bg-[#F05830] text-white rounded w-[160px] h-[45px] font-semibold font-Poppins lg:mb-0 mb-6'>Get Started</button>
                            <div className='flex items-center gap-2'>
                                <span><img className='w-[25px]' src={union} alt="" /></span> <span className='text-[#0D0D0D] text-[20px] font-[500] font-Poppins'>Shake Hands!</span>
                            </div>
                        </div>

                        <div className='flex gap-8 pt-5 w-[200px] lg:w-full mx-auto mb-16'>
                            <div className=''>
                                <h1 className='text-[#236E57] font-Poppins font-[800] text-[40px] w-[116px] h-[50px] '>199k+</h1>
                                <p className='text-[#807D7D] font-[300] text-[16px]'>Active Users</p>
                            </div>
                            <div>
                                <h1 className='text-[#236E57] font-Poppins font-[800] text-[40px] w-[116px] h-[50px]'>20+</h1>
                                <p className='text-[#807D7D] font-[300] text-[16px]'>New Features</p>
                            </div>
                        </div>

                    </div>

                    <div className='bg-header-bg-image bg-cover bg-no-repeat bg-right	 lg:w-[530px] lg:h-[320px] w-full h-full'>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header