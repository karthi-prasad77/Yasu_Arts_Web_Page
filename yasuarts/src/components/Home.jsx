import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'
import Video from '../assets/video/video.mp4';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen'>
      {/* Container */}
      
      <video autoPlay loop muted style={{position: "absolute", width: "100%", left: "50%", top: "50%", height: "100%", objectFit: "cover", transform: "translate(-50%, -50%)", zIndex: "-1"}}>
        <source src={Video} type="video/mp4"/>
      </video>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi there, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-black'>
          Yaswath Kumar S
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-black'>
          I'm a Artist.
        </h2>
        <p className='text-black py-4 max-w-[700px]'>
          I’m a Artist specializing in professional arts (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          design and make an realistic art from the images and cannot able to differentiate between original and art.
        </p>
        <div>
                    <Link to='art' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Arts
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight size={20} className='ml-1'/>
                        </span>
                    </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
