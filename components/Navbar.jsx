import React from 'react'
import Image from "next/image"
import Logo from "../assets/logo.svg"

const Navbar = () => {
  return (
    <div className="containor w-full h-16 bg-gray-50 flex justify-center items-center">
        <div className="containorImage h-10 w-24 flex justify-center items-center">
            <Image src={Logo} alt="logo"  />
            </div>                
    </div>
  )
}

export default Navbar