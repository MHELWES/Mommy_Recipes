import React from 'react'
import { MdCopyright } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
        <footer className='w-full flex justify-between items-center border-t mt-14 h-fit px-5 sm:px-[3em] py-6'>
            <div className='text-white text-xl font-Inter'>
                <h1 className='flex'>@Copy<span className='text-blue-500'>Right</span> - 2024 <MdCopyright className='ml-1'/></h1>
            </div>
            <div className='text-white flex items-center gap-3 text-xl'>
                <a href="https://www.instagram.com/mhelwes_xyz/" target='_blank'><FaInstagram className='ease-in-out duration-300 hover:text-blue-500 cursor-pointer'/></a>
                <a href="https://www.linkedin.com/in/mouad-xyz-611724282/" target='_blank'><FaLinkedin className='ease-in-out duration-300 hover:text-blue-500 cursor-pointer'/></a>
                <a href="https://github.com/MHELWES" target='_blank'><FaGithub className='ease-in-out duration-300 hover:text-blue-500 cursor-pointer'/></a>
            </div>
        </footer>   
    </>
  )
}

export default Footer