import React from 'react'
import Info from './components/Info'
import Contact from './components/Contact'
import profileImage from "./assets/profile.jpg"


function App() {


  return (
    <>
    <div className='flex min-h-screen items-center justify-center bg-slate-200'>
      <main className='relative flex min-h-screen w-full max-w-6xl animate-fade-up flex-col overflow-hidden bg-white  shadow-2xl animate-duration-500 animate-fill-forward animate-once animate-ease-in md:h-[667px] md:min-h-0 md:flex-row md:rounded-3xl md:pd-0'>
        <img className='absolute left-80 top-8 z-10 hidden h-[550px] w-[340px] rounded-md object-cover xl:block'
          src={profileImage}
          alt="profile image" 
        />

        <div className='left-[220px] top-[120px] z-20 hidden animate-bounce lg:animate-bounce bg-rose-200 animate-duration-[2000ms] animate-infinite animate-ease-linear md:block xl:left-[295px] xl:top-[85px] lg:left-[30px] lg:top-[45px] md:left-[30px] md:top-[55px] lg:bg-sky-700/60 absolute h-12 w-12  md:bg-gray-500/40'/>
        <div className='left-[38px] top-[170px] z-20 hidden animate-wiggle
          bg-rose-200 animate-duration-[2000ms] animate-infinite animate-ease-linear md:block xl:left-[360px] xl:top-[555px] lg:top-[200px] md:left-[50px] md:top-[200px] lg:bg-green-700/60 absolute h-12 w-12 md:bg-gray-500/40'/>
        <div className='left-[183px] top-[50px] z-20 hidden bg-rose-200 md:block xl:left-[640px] lg:left-[215px] lg:top-[80px] md:left-[210px] md:top-[75px] absolute h-5 w-12 md:bg-gray-500/60 lg:bg-gray-700/60'/>
        <div className='left-[291px] top-[622px] hidden bg-rose-200 md:block xl:left-[630px] xl:top-[550px] lg:left-[200px] lg:top-[200px] md:top-[200px] md:left-[200px] absolute rounded-full h-36 w-36 lg:bg-sky-700/60 md:bg-gray-600/40 sm:h-14 sm:w-14'/>
        <div className='right-0 top-0 hidden -translate-y-1/2 translate-x-1/2 bg-rose-200 md:block absolute rounded-full h-36 w-36 md:bg-sky-900 sm:h-14 sm:w-14'/>
      <Contact />
      <Info />
      </main>

    </div>
    </>
  )
}

export default App
