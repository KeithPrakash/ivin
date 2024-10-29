import Image from "next/image";
import { useState } from "react";

const Nav=()=>{
  const [nav ,setNAv]=useState(true)
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
      <img onClick={()=>setNAv(false)} src="/closeIcon.png" className="w-7" />
    </div>
    <ul className="text-white text-3xl font-semibold gap-10 mt-[70px]">
    <li> Home</li>
        <li>Welcome</li>
        <li>Services</li>
        <li> Why Choose us</li>  
      </ul> </div>
    {/* mobile menu */}
      <div className="   rounded-sm ">
        <img  src="/logoivin.png" className="w-20 md:w-20 rounded-xl object-cover"/>
      </div>
       <div className="md:flex items-center hidden justify-center text-white text-sm md:text-xl" > <ul className="flex  md:gap-4 lg:gap-6">
        <li> Home</li>
        <li>Welcome</li>
        <li>Services</li>
        <li> Why Choose us</li>
        </ul></div>
   <div className=""> <img 
   onClick={()=>setNAv(true)}
   src="/menu.png" className="w-8 md:hidden"/ ></div>
    </header>
  )
}

export default Nav;