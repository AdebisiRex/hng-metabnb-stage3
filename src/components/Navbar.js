import React, { useRef } from 'react'

//images
import metalogo from "../assets/metalogo.png"
import metabnb from "../assets/metabnb.png"


const Navbar = () => {
    let menuRef = useRef();
    
  return (
    <>
    <nav className='flex justify-between mb-12 md:mx-24 mx-4 items-center'>
        <div className="">
            <img className='inline-block' src={metalogo} alt="" />
            <img className='inline-block ml-2' src={metabnb} alt="" />   
        </div>
        <ul ref={menuRef} className='hidden md:block text-xl'>
            <li className='md:inline-block px-4 text-xl'>Home</li>
            <li className='md:inline-block px-4 text-xl' >Place to Stay</li>
            <li className='md:inline-block px-4 text-xl'>NFTs</li>
            <li className='md:inline-block px-4 text-xl'>Community</li>
        </ul>
        {/* <button onClick={toggleMenu} className='md:hidden'>
            Ham

        </button> */}
        <button className='px-10 py-4 bg-primary text-white hover:bg-white hover:border-primary hover:border-1 hover:text-primary transition ease-in-out  rounded-xl'>
            Connect Wallet
        </button>

    </nav>
    </>
  )
}

export default Navbar