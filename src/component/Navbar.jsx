import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft, BiUserPlus } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import city from '../assets/Citi-logo 1.png'
import Login from './Login';
const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <nav>
      <div className='w-full fixed top-0 left-0 z-50 bg-[#FFF8F1]'>
        <div className='md:flex items-center justify-between py-4 md:px-14 px-7  max-w-7xl mx-auto'>
          <div className='flex gap-16'>
          <div className=' font-bold  cursor-pointer  
text-white'>
            <span className=''>
              <img className='lg:h-[30px] h-[30px] lg:w-[100px] lg:ml-2 ml-0' src={city} alt="" />
              <h1 className='text-[#807D7D] text-[15px] pt-1 lg:ml-4 ml-0 font-Poppins font-[400] lg:block hidden'>Banking Partner of Citi Global</h1>
            </span>


          </div>



          <div className='bg-[#F05830] px-4 py-2  ml-[-15px]  rounded  duration-500 cursor-pointer  font-Poppins text-white lg:hidden '>

            <Link to='/singup'>
              <div className='flex justify-center items-center gap-1 font-medium'><span><BiUserPlus size={25} /></span> <span>Sing Up</span></div>
            </Link>
          </div>

          </div>




          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {!open ? <BiMenuAltLeft className='border border-[#e80566] shadow rounded w-10 hover:border-[#6d28d9] duration-300 text-black' name={open ? 'close' : 'menu'}>

            </BiMenuAltLeft> : <AiOutlineClose className='border border-[#e80566] shadow rounded w-10 hover:border-[#6d28d9] duration-300 text-black' />}




          </div>



          <ul onClick={() => setOpen(!open)} className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:bg-[#FFF8F1] bg-[#FFF8F1] text-black  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 pr-6 transition-all duration-700 ease-in ${open ? 'left-0 ' : 'left-[-420px]'}`}>


            <li>
              <Link to='/' className='md:ml-8 text-center text-xl cursor-pointer block font-Poppins lg:text-[#F05830] text-[#0D0D0D] pt-12 lg:pt-0 '>Home
              </Link>
            </li>
            <li>
              <Link to='/' className='  md:ml-8 text-center text-xl cursor-pointer block font-Poppins text-[#0D0D0D] '>How it works
              </Link>
            </li> 
            
            <li>
              <Link to='/' className='  md:ml-8 text-center text-xl cursor-pointer block font-Poppins text-[#0D0D0D] '>Contact
              </Link>
            </li> 
            <li>
              <Link to='/login' className='  md:ml-8 text-center text-xl cursor-pointer block font-Poppins text-[#0D0D0D] '>Login
              </Link>
            </li>
             


          </ul>


          <div className='bg-[#F05830] px-4 py-2  w-[130px] rounded  duration-500 cursor-pointer  font-Poppins text-white lg:block hidden'>

            <Link to='/singup'>
              <div className='flex justify-center items-center gap-1 font-semibold '><span><BiUserPlus size={25} /></span> <span>Sing Up</span></div>
            </Link>


          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;