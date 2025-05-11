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

        <div className="w-full  bg-white ">
     <div className=" bg-white h-[20dvh] md:h-[20dvh]   rounded-b-2xl w-full">

</div>

<div className="flex flex-col   lg:grid  lg:grid-cols-2 w-full pt-20px mt-20 max-w-[1000px] mx-auto">
<div className=" h-auto  flex justify-center items-center w-full pb-20  ">
                <div className="rounded-xl  p-[28px] md:p-[50px]  min-w-[320px]bg-gradient-to-tl from-blue-100 to-blue-100  shadow-2xl" data-aos="fade-left" data-delay="300">
                <form className="flex flex-col w-full     " action={sendMessage}>
                  <div>
                    <h3 className="font-semibold text-xl pb-5 text-blue-950 ">Lets get in touch</h3>
                  </div>

                     <div className="capitalize flex flex-col gap-5 ">
                        <input className="h-[40px] placeholder-blue-950 bg-blue-400/10 w-full border-b-2  border-[#6c4848]  outline-none ring-0"    placeholder="Name"  name="name" value={formData.name}
                                      onChange={handleChange}/>  
                        <textarea className="h-[100px] placeholder-blue-950 bg-blue-400/10 w-full border-b-2 border-[#6c4848]  outline-none ring-0"    placeholder="Message" name="message"  value={formData.message }
                                       onChange={handleChange}/>  
                                      
                      <span> <button className=" transition-all bg-gradient-to-br from-blue-950  to-blue-700  py-2 px-3 rounded-md font-semibold text-white hover:opacity-45" type="submit">Submit</button></span>                 
                     </div>
                  </form>
                </div>          
            </div>     
     <div className="relative flex w-full items-center justify-center overflow-hidden  px-40 pb-40  md:pb-[400px]   h-[70dvh]  md:min-h-[80dvh]">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-blue-950 to-blue-700/80 bg-clip-text text-center width:  z-50  absolute text-xl xl:text-2xl font-semibold leading-none text-transparent ">
      Unlock International Opportunities<br/> with IVIN Consultancy
      </span>``
      <Globe className="top-[0dvh] w-[80dvw]   lg:w-[27dvw] m-auto"  />
      <div className="pointer-events-none absolute inset-0 h-full " />
    </div>
  </div>         



        </div>

        
    )
}

export default Contact;