import React from 'react'
import Harry from '../assets/arts/harry.jpeg'
import Eye from '../assets/arts/eye.jpeg'
import Varisu from '../assets/arts/varisu.jpeg'
import Spb from '../assets/arts/spb.jpeg'
import Krishna from '../assets/arts/krishna.jpeg'
import Aadhi from '../assets/arts/adhi.jpeg'

const Art = () => {
    const art = [
        {
            id: 1,
            src: Harry,
            href: 'https://www.instagram.com/p/Cl33UoRScUW/?igshid=MDJmNzVkMjY='
        },
        {
            id: 2,
            src: Eye,
            href: 'https://www.instagram.com/p/CnHiosrSWyC/?igshid=YmMyMTA2M2Y='
        },
        {
            id: 3,
            src: Varisu,
            href: 'https://www.instagram.com/p/Coe--ShPZaZ/?igshid=MDJmNzVkMjY='
        },
        {
            id: 4,
            src: Spb,
            href: 'https://www.instagram.com/p/CmWb_pZSC9C/?igshid=MDJmNzVkMjY='
        },
        {
            id: 5,
            src: Krishna,
            href : 'https://www.instagram.com/p/Cli8jbfS9mC/?igshid=MDJmNzVkMjY='
        },
        {
            id: 6,
            src: Aadhi,
            href: '#'
        }
      
    ]
    return (
      <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
              Work
            </p>
            <p className='py-6'>Check out some of my recent work</p>
          </div>
  
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {art.map((item, index) => (
    <div
      key={index}
      style={{ backgroundImage: `url(${item.src})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md 
                flex justify-center text-center items-center mx-auto content-div "
    >
      <div className="opacity-0 group-hover:opacity-100 ">
        <span className="text-2xl font bold text-white tracking-wider ">
          {item.name}
        </span>
        <div className="pt-8 text-center ">
          <a href={item.href} target="_blank" rel='noreferrer'>
            <button
              className="text-center rounded-lg px-4 py-3 m-2
                         bg-white text-gray-700 font-bold text-lg"
            >
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  ))}
  
  
  </div>
        </div>
      </div>
    );
  };
  
  export default Art;