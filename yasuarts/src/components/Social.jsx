import React from 'react'
import {FaInstagram, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Social = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                 LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/yaswath-kumar-09732a247https://www.linkedin.com/in/yaswath-kumar-09732a247',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                 Mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:yasumarts@gmail.com'
        },
        {
            id: 3,
            child: (
                <>
                 Instagram <FaInstagram size={30} />
                </>
            ),
            href: 'https://instagram.com/_.yaswath_art._?igshid=ZDdkNTZiNTM=',
            style: 'rounded-br-md',
            download: true,
        }
    ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) => (
                 <li key={id} className={
                    "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black-500" +
                    " " +
                    style
                  }>
                 <a href={href} className='flex justify-between items-center w-full text-white' target='_blank' rel='noreferrer'>
                  {child}  
                 </a>
             </li>
            ))}
           
        </ul>
    </div>
  )
}

export default Social