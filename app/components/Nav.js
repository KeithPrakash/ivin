import Image from "next/image";
import { useState } from "react";
import logoinvin from '../../public/logoivin.png'
import closeIcon from '../../public/closeIcon.png'
import menu from '../../public/menu.png'

const Nav=()=>{
  const [nav ,setNAv]=useState(false)
  return(
    <header className="flex  justify-between md:justify-around    py-5 px-10 items-center relative">
    {/* mobile menu */}
    <div
  className={`absolute bg-white/10 border border-white/20 backdrop-blur-xl left-0 p-6 w-full md:hidden top-0 rounded-b-3xl h-[50dvh] transition-transform duration-500 ${
    nav ? "translate-y-0" : "translate-y-[-100%]"
  }`}
>
    {/* bg-[#ecdcdc] -[#6c4848] */}
    <div className="float-right">
      <Image alt="close icon" onClick={()=>setNAv(false)} src={closeIcon} className="w-7" />
    </div>
    <ul className="text-white text-3xl font-semibold gap-10 mt-[70px]">
    <li> <a href="#hero" onClick={()=>setNAv(false)}>Home</a></li>
        <li> <a href="#welcome" onClick={()=>setNAv(false)}>Welcome</a></li>
        <li> <a href="#services" onClick={()=>setNAv(false)}>Services</a></li>
        <li > <a href="#trust" onClick={()=>setNAv(false)}>Why Choose us</a></li>
      </ul> </div>
    {/* mobile menu */}
      <div className="   rounded-sm ">
        <Image  alt="image" src={logoinvin} className="w-20 md:w-20 rounded-xl object-cover"/>
      </div>
       <div className="md:flex items-center hidden justify-center text-white text-sm md:text-xl" > <ul className="flex  md:gap-4 lg:gap-6">
        <li> <a href="#hero">Home</a></li>
        <li> <a href="#welcome">Welcome</a></li>
        <li> <a href="#services">Services</a></li>
        <li > <a href="#trust">Why Choose us</a></li>
        </ul></div>
   <div className=""> <Image alt="menu icon"
   onClick={()=>setNAv(true)}
     src={menu} className="w-8 md:hidden"/ ></div>
    </header>
  )
}

export default Nav;