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
        <div
          name="arts"
          className="bg-gradient-to-b bg-[#0a192f] w-full h-screen text-white"
        >
          <div className="max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Arts
              </p>
              <p className="py-6">Check out some of my arts right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {art.map(({ id, src, href }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <a href={href} target="_blank"  rel="noreferrer">
                    <button className="px-6 py-2 m-2 duration-200 hover:scale-105">
                      Art Here
                    </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    

export default Art;