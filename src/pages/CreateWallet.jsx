import React from 'react'


function CreateWallet() {
    return (
        <div className='bg-[#FFF8F1] '>


        <div className='font-Poppins  max-w-7xl mx-auto '>
                <div className='flex md:flex-row flex-col w-full overflow-hidden min-h-[70vh] py-3 items-center gap-4 '>
                        <div className='w-full h-full  '>
                            <div className='relative top-0 md:w-[475px] md:h-[370px] w-[352px] h-[277px]  bg-no-repeat bg-cover bg-[url("https://i.ibb.co/L1FgD2V/Group-107.png")]'>
                                <img className='md:absolute md:-top-20 md:h-fit h-[292px]' src="https://i.ibb.co/HxzWqMk/Group-103.png" />
                            </div>




                        </div>
                        <div className='w-full h-full'>
                            <h2 className='md:text-4xl text-2xl font-extrabold text-gray-700 text-center md:text-left'>Choose and Convert your Wallet Anytime!</h2>
                            <h2 className='text-lg  text-gray-700 my-4 text-center md:text-left'>It’s very easy to get a wallet here. Just sign up and complete the KYC details! Then, it’s just a boom!</h2>


                            <button className='px-5 block mx-auto md:mx-0 rounded-md font-bold hover:bg-[#F05830] hover:text-white duration-300 my-3 text-[#F05830] border border-[#F05830] py-3'>Create Your Wallet</button>
                        </div>
                </div>
        </div>
        </div>
    )
}


export default CreateWallet