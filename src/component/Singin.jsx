import React, { useState } from 'react'
import Rectangle from '../assets/Rectangle 1862.png'
import city from '../assets/Citi-logo 1.png'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Singin = () => {
    const [visible, setVisible] = useState(false);
    const [confirmvisible, setConfirmVisible] = useState(false);
    return (
        <div className='bg-[#F5F5F5] font-Poppins'>
            <div className=' flex flex-col justify-center items-center h-[100vh] max-w-7xl mx-auto'>

                <div className='bg-[#FFF8F1] lg:w-3/4 w-full mt-16 lg:mt-0'>

                    <div className='lg:flex lg:flex-row-reverse'>
                      

                        <div className='bg-white lg:w-[550px] w-full px-6 py-6 rounded'>
                            <div className='flex justify-end pr-4 '>
                                <Link to='/login'> <h1 className='bg-[#F05830] px-2 py-2 rounded text-white font-semibold w-[100px] text-center cursor-pointer'>Login</h1></Link>
                            </div>

                            <h1 className='text-[#525252] font-[28px] text-2xl text-center mt-6'>Sign up Your Account</h1>

                            <p className='text-[#666666] text-[20px] font-normal mt-6 '>It’s so simple!</p>

                            <div>

                                <div className="mt-4">
                                    <label className="block text-[#666666] text-sm  font-medium mb-2">Email Address</label>
                                    <input className="bg-[#F5F4FF] text-gray-700 rounded focus:outline-none focus:shadow-outline py-[10px] px-4 block w-full appearance-none" placeholder='Type here' type="email" />
                                </div>

                                <div className="mt-4 relative">
                                    <label className="block text-[#666666] text-sm  font-medium mb-2">Password</label>
                                    <input className="bg-[#F5F4FF] text-gray-700 rounded focus:outline-none focus:shadow-outline py-[10px] px-4 block w-full appearance-none" type={visible ? "text" : "password"} />
                                    {visible ? (
                                        <AiOutlineEye
                                            className="absolute top-10 right-3 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className="absolute top-10 right-3 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(true)}
                                        />
                                    )}
                                </div>


                                <div className="mt-4 relative">
                                    <label className="block text-[#666666] text-sm  font-medium mb-2">Confirm Password</label>
                                    <input className="bg-[#F5F4FF] text-gray-700 rounded focus:outline-none focus:shadow-outline py-[10px] px-4 block w-full appearance-none" type={confirmvisible ? "text" : "password"} />
                                    {confirmvisible ? (
                                        <AiOutlineEye
                                            className="absolute top-10 right-3 cursor-pointer"
                                            size={25}
                                            onClick={() => setConfirmVisible(false)}
                                        />
                                    ) : (
                                        <AiOutlineEyeInvisible
                                            className="absolute top-10 right-3 cursor-pointer"
                                            size={25}
                                            onClick={() => setConfirmVisible(true)}
                                        />
                                    )}
                                </div>


                                <button className='bg-[#003443] rounded w-full text-white font-semibold text-center py-[10px] mt-8'>Sing In</button>

                            </div>

                        </div>


                        <div className='lg:w-[500px] w-full pl-6 py-6'>
                            <span><img src={city} alt="" /></span>

                            <img className='' src={Rectangle} alt="" />
                        </div>


                    </div>

                </div>


            </div>
        </div>
    )
}

export default Singin