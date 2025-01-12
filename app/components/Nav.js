'use client'
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import logoinvin from '../../public/logoivin.png'
import closeIcon from '../../public/closeIcon.png'
import menu from '../../public/menu.png'
import Link from "next/link";

const Nav=()=>{
  const [nav ,setNAv]=useState(false)
  const pathname = usePathname();
  const CloseNav =()=>setNAv(false);
  return(
    <header className="absolute top-0 w-full z-[9999]  " >
     <div className="flex  justify-between md:justify-around    py-5 px-10 items-center relative" >
         {/* mobile menu */}
    <div
  className={`absolute bg-white/10 border border-white/20 backdrop-blur-xl left-0 p-6 w-full md:hidden top-0 rounded-b-3xl h-[70dvh] transition-transform duration-500 ${
    nav ? "translate-y-0" : "translate-y-[-100%]"
  }`}
>
    {/* bg-[#ecdcdc] -[#6c4848] */}
    <div className="float-right">
      <Image alt="close icon" onClick={()=>setNAv(false)} src={closeIcon} className="w-7" />
    </div>
    <ul className="text-white text-2xl flex flex-col font-semibold gap-10 mt-[70px]">
    <li> <Link href="/" onClick={CloseNav}
       className={`${pathname === "/" ? "border-b-2 border-white" : ""}`}
    
         >Home</Link></li>
        <li> <Link href="/about-us" onClick={CloseNav}
         className={`${pathname === "/about-us" ? "border-b-2 border-white" : ""}`}
        >About Us</Link></li>
        <li>  <Link href='/services' onClick={CloseNav}
         className={`${pathname === "/services" ? "border-b-2 border-white" : ""}`}
        >Services</Link></li>
        <li > <Link href="/contact" onClick={CloseNav}
              className={`${pathname === "/contact" ? "border-b-2 border-white" : ""}`}
        >Contact</Link></li> 
      </ul> </div>
    {/* mobile menu */}
      <div className="   rounded-sm ">
        <Image  alt="image" src={logoinvin} className="w-20 md:w-20  xl:w-24 rounded-xl object-cover"/>
      </div>
       <div className="md:flex items-center hidden justify-center text-white text-sm md:text-xl" > <ul className="flex  md:gap-4 lg:gap-6">
        <li> <Link href="/"
          className={`${pathname === "/" ? "border-b-2 border-white transition-all" : "transition-all"}`}
        >Home</Link></li>

      
        <li> <Link href="/about-us"
         className={`${pathname === "/about-us" ? "border-b-2 border-white transition-all" : "transition-all"}`}
        >About Us</Link></li>
        <li>  <Link href='/services'
        className={`${pathname === "/services" ? "border-b-2 border-white transition-all" : " transition-all"}`}
        >Services</Link></li>
        <li > <Link  href="/contact"
        className={`${pathname === "/contact" ? "border-b-2 border-white transition-all" : "transition-all"}`}
        >Contact</Link></li>
        </ul></div>
   <div className=""> <Image alt="menu icon"
   onClick={()=>setNAv(true)}
     src={menu} className="w-8 md:hidden"/ ></div>


     </div>
 
    </header>
  )
}

export default Nav;