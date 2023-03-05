import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            href: 'home',
        },
        {
            id: 2,
            href: 'about',
        },
        {
            id: 3,
            href: 'tools',
        },
        {
            id: 4,
            href: 'arts',
        },
        {
            id: 5,
            href: 'contact',
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Yasu Arts</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, href}) => (
                
                <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-800 hover:scale-105 duration-200'><Link to={href} smooth duration={500}>{href}</Link></li>
            ))}
            {console.log(links.href)}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-800 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
        
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            {links.map(({id, href}) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => setNav(!nav)} to={href} smooth duration={500}>{href}</Link></li>
            ))}
        </ul>
        )}  
    </div>
  )
}

export default Navbar;
