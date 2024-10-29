import Image from "next/image";

const Nav=()=>{
  return(
    <header className="flex justify-around    py-5 px-10 items-center">
      <div className="   rounded-sm ">
        <img  src="#" className="w-20 rounded-xl object-cover"/>
      </div>
       <div className="flex items-center justify-center text-white text-xl" > <ul className="flex gap-6">
        <li> Home</li>
        <li>Welcome</li>
        <li>Services</li>
        <li> Why Choose us</li>
        </ul></div>
   <div></div>
    </header>
  )
}

export default Nav;