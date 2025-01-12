import Image from "next/image"
import fbIcon from "../../public/fbIcon.png"
import instaIcon from "../../public/instaIcon.png"
import linkIcon from "../../public/linkIcon.png"
import  wpIcon from "../../public/wpIcon.png"
import logo from "../../public/logoivin.png"

const Footer=()=>{
  return(
    <div className="bg-gradient-to-br flex flex-col from-[#815454] via-[#301f1f] to-[#301f1f] w-full h-full  p-6 md:p-7  lg:p-20 rounded-t-3xl ">

<div className="grid lg:grid-cols-3 text-white w-full  mb-7 ">
     <Image src={logo}  alt="logo" className="w-[100px] h-auto"/>
      <div className="grid  col-span-2 md:flex justify-evenly gap-7 text-white/70  w-full">
         <div className="flex flex-col gap-2 i items-center text-xs "> 
            <h4 className="text-base text-white">Address</h4>
              <div>No-04 National Housing Scheme,</div>  
               <div>Bogamadhitha Hali-Ella,</div>     
               <div>Badulla</div>    
            
         </div>  <div className="flex flex-col gap-2 items-center  text-xs"> 
            <h4 className="text-base text-white">Contact</h4>
              <div>+94 778 604 904</div>  
               <div>Info@ivinconsultancy.com</div>     
             
         </div>  <div className="flex flex-col gap-2  items-center text-xs"> 
            <h4 className="text-base">Company</h4>
            <div> <a href="#welcome" >Welcome</a></div>
        <div> <a href="#services">Services</a></div>
        <div > <a href="#trust">Why Choose us</a></div>
         </div>

      </div>
    </div>
    <div className="w-full border- h-[1px] border-white my-2 md:my-10 bg-gradient-to-r from-[#433737] via-[#e8d5d5] to-[#301f1f] rounded-full ">
    
       </div>
         
      <div className="  py-4 md:p-4 flex flex-col-reverse items-center  md:flex-row md:justify-between text-xs text-white">
        <div>© 2024 Your Company, Inc. All rights reserved.</div>    <div className="flex gap-4  lg:gap-6">
       <Image  alt="icon" src={fbIcon} className="w-8 h-auto"/> 
       <Image alt="icon" src={instaIcon} className="w-8 h-auto" />  
       <Image alt="icon"  src={linkIcon} className="w-8 h-auto"/>  
       <Image alt="icon"   src={wpIcon} className="w-8 h-auto"/>
         
         <div/>
      </div>
        </div>
    </div>
  
  )
}


export default Footer;