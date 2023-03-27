import React from 'react'
import group from '../assets/Group 103.png'
import bg from '../assets/bg-2.png'
const Wallet = () => {
    return (
        <div className='bg-[#FFF8F1]'>

            <div className='flex gap-12 h-[100vh]'>

                <div className=' w-[600px] h-full relative'>
                    <img className=' ' src={bg} alt="" />
                    <img className=' w-[400px] mt-[-350px] ml-[70px]' src={group} alt="" />
                </div>

                <div className='w-[550px]'>
                    <div className='ml-16'>
                        <h1 className='text-[#0D0D0D] font-[800] text-[40px] '>Choose and Convert your Wallet Anytime!</h1>
                        <p className='text-[#776D6D] font-[400] text-[22px] mt-3'>It’s very easy to get a wallet here. Just sign up and complete the KYC details! Then, it’s just a boom!</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Wallet