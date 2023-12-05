import React from 'react';

const Info = () => {
  return (
    <section className='flex flex-1 flex-col gap-5 px-10 pt-10 md:pt-20 xl:pl-80'>
      <h1 className="flex flex-col text-4xl font-semibold uppercase animate-delay-[500ms] md:text-5xl animate-fade-left animate-duration[500ms] animate-once animate-ease-out animate-fill-forwards opacity-0">
        <span className="text-rose-600">Sanja Rogovic</span>
      </h1>
      <div>
        <h2 className='mb-3 flex items-center gap-2 font-semibold animate-delay-[1000ms] md:text-lg animate-fade-left animate-duration-[500ms] animate-once animate-ease-out animate-fill-forwards opacity-0'>
          <span>Full Stack Developer</span>
          <span>&#x2023;</span>
          <span>Vienna, Austria</span>
        </h2>
        <p className='text-sm animate-delay-[1500ms] md:text-base animate-fade-left animate-duration-[500ms] animate-once animate-ease-out animate-fill-forwards opacity-0'>Hello, I'm Sanja, a junior web developer eager to kick-start my journey in the tech world. I thrive on challenges and have a genuine passion for learning new technologies and frameworks. My ultimate goal is to leverage my coding skills to create web applications that make a positive impact on people's lives. I'm excited to contribute, grow, and collaborate within a dynamic development team.</p>
      </div>
      <div>
        <h2 className='mb-3 font-semibold md:text-lg animate-delay-[2000ms] animate-fade-left animate-duration-[500ms] animate-once animate-ease-out animate-fill-forwards opacity-0'>
          Tech Stack
        </h2>
        <ul className='flex flex-col gap-3 pl-1 text-sm md:text-base'>
          <li className='animate-delay-[2500ms] animate-duration-[400ms] animate-fade-left animate-once animate-ease-out animate-fill-forwards opacity-0'># JavaScript</li>
          <li className='animate-delay-[2800ms] animate-duration-[400ms] animate-fade-left animate-once animate-ease-out animate-fill-forwards opacity-0'># React</li>
          <li className='animate-delay-[3100ms] animate-duration-[400ms] animate-fade-left animate-once animate-ease-out animate-fill-forwards opacity-0'># TailwindCSS</li>
          <li className='animate-delay-[3400ms] animate-duration-[400ms] animate-fade-left animate-once animate-ease-out animate-fill-forwards opacity-0'># MongoDB</li>
          <li className='animate-delay-[3700ms] animate-duration-[400ms] animate-fade-left animate-once animate-ease-out animate-fill-forwards opacity-0'># NodeJS + Express</li>
        </ul>
      </div>
    </section>
  );
}

export default Info