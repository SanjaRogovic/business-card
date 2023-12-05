import React from 'react'
import profileImage from "../assets/profile.jpg"
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
  return (
    <section className='grid grid-cols-1 justify-items-center gap-4 bg-sky-900 px-10 pb-10 pt-10 text-sm text-white
    sm:grid-cols-2 sm:items-center sm:justify-items-start sm:gap-2 sm:pb-20 md:flex md:flex-col md:items-stretch md:justify-end md:text-base xl:w-96'>
        <div className='mb-auto h-36 w-36 overflow-hidden rounded-full sm:h-44 sm:w-44 md:h-52 md:w-52 xl:hidden'>
            <img 
            src={profileImage} 
            alt="image" 
            className="h-full w-full object-cover"
            />
        </div>
        <div className='flex flex-col items-center gap-2 sm:col-start-2 sm:row-start-1 sm:mb-20 sm:items-start md:mb-9'>
            <div className='flex gap-1'>
                <MdOutlineMailOutline className='mt-1'/>
                Email
            </div>
            <a href="mailto:sanja210@gmail.com" className='hover:underline'>sanja210@gmail.com</a>
        </div>

        <div className='-mx-10 hidden h-5 bg-white md:block'/>

        <div className='flex flex-col items-center gap-3 font-semibold sm:col-start-2 sm:row-start-1 sm:mt-20 sm:items-start md:mt-6'>
            Find me on
            <div className='flex gap-4'>
                <a href="https://github.com/SanjaRogovic" target='_blank' rel='noreferrer' className='relative inline-block w-fit rounded-md text-white/60 outline-none transition-colors after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-slate-800 after:opacity-0 after:transition-all after:duration-200 after:content-[""] hover:text-white focus-visible:text-white focus-visible:after:translate-y-2 focus-visible:after:opacity-100'><IoLogoGithub /></a>
                <a href="https://www.linkedin.com/in/sanjarogovic/" target='_blank' rel='noreferrer' className='relative inline-block w-fit rounded-md text-white/60 outline-none transition-colors after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-slate-800 after:opacity-0 after:transition-all after:duration-200 after:content-[""] hover:text-white focus-visible:text-white focus-visible:after:translate-y-2 focus-visible:after:opacity-100'><IoLogoLinkedin /></a>
            </div>
        </div>
    </section>
  )
}

export default Contact