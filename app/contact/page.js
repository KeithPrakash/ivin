'use client'
import Globe from "@/components/ui/globe";
import { useState } from "react";


const Contact =()=>{
  
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendMessage = () => {
    const { name, message } = formData;
    const phoneNumber = "+971527900527"; 
    const encodedMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };


    return(

        <div className="w-full  bg-gradient-to-t from-[#f4ecec] via-[#ddc4c4] to-[#f4ecec] ">
     <div className=" bg-gradient-to-br from-[#815454] via-[#301f1f] to-[#301f1f]  h-[20dvh] md:h-[20dvh]   rounded-b-2xl w-full">

</div>

<div className="flex flex-col   lg:grid  lg:grid-cols-2 w-full pt-20px mt-20">
<div className=" h-auto  flex justify-center items-center w-full pb-20 ">
                <div className="rounded-xl  p-[28px] md:p-[50px]  min-w-[320px] bg-slate-200  shadow-2xl" data-aos="fade-left" data-delay="300">
                <form className="flex flex-col w-full     " action={sendMessage}>
                  <div>
                    <h3 className="font-semibold text-xl pb-5 text-[#6c4848] ">Lets get in touch</h3>
                  </div>

                     <div className="capitalize flex flex-col gap-5 ">
                        <input className="h-[40px] placeholder-gray-600 bg-slate-400/10 w-full border-b-2  border-[#6c4848]  outline-none ring-0"    placeholder="Name"  name="name" value={formData.name}
                                      onChange={handleChange}/>  
                        <textarea className="h-[100px] placeholder-gray-600 bg-slate-400/10 w-full border-b-2 border-[#6c4848]  outline-none ring-0"    placeholder="Message" name="message"  value={formData.message }
                                       onChange={handleChange}/>  
                                      
                      <span> <button className=" transition-all bg-gradient-to-br from-[#815454] via-[#5c4040] to-[#5c4040]  py-2 px-3 rounded-md font-semibold text-white hover:opacity-45" type="submit">Submit</button></span>                 
                     </div>
                  </form>
                </div>          
            </div>     
     <div className="relative flex w-full items-center justify-center overflow-hidden  px-40 pb-40 pt-8 md:pb-60  min-h-[60dvh]">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-700/80 bg-clip-text text-center width:  z-50  absolute text-xl xl:text-2xl font-semibold leading-none text-transparent ">
      Unlock International Opportunities<br/> with IVIN Consultancy
      </span>
      <Globe className="top-[30dvh] w-[70dvw]   lg:w-[30dvw] m-auto"  />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  </div>         



        </div>

        
    )
}

export default Contact;