'use client'


import Image from "next/image";
import Card from "./components/Card";
import TrustCard from "./components/TrustCard";
import Nav from "./components/Nav";
import image from  "../public/image.png"
import guidance from "../public/guidance.png"
import direction from "../public/direction.png"
import network from "../public/network.png"
import help from "../public/help-desk.png"
import crowd from "../public/crowd.png"
import airport from "../public/airport-in.jpg"
import pixel from "../public/pexels.jpg"
import manv from "../public/manvisa.jpg"
import planeoff from "../public/planoff.jpg"
import ticket from "../public/tickets.jpg"
import interview from  "../public/interview.jpg"
import relocation from "../public/relocation.jpg"
import training from "../public/training.jpg"
import hero from "../public/hero.jpg"
import wp from "../public/wp.png"
import aos from "aos";
import '../node_modules/aos/dist/aos.css'
import { useEffect,useState } from "react";
import WordPullUp from "@/components/ui/word-pull-up"
const chooseUS= [
  {
    img:guidance,
    title: "Personalized Guidance Every Step of the Way",
    description: "We understand that every individual’s journey is unique. That’s why we tailor our services to your specific needs, providing one-on-one support from visa applications to job placement, ensuring a smooth transition to your new life abroad."
  },
  {
    img:direction,
    title: "Expertise You Can Trust",
    description: "With years of experience in international recruitment and immigration services, our team is equipped with the knowledge and connections to open doors to top global opportunities, offering you the confidence to take the next big step in your career."
  },
  { img:help,
    title: "Comprehensive End-to-End Support",
    description: "From preparing for interviews to finding accommodation and settling into a new culture, we offer complete support throughout the entire migration process, making sure you are fully prepared for life in a new country."
  },
  {   img:crowd,
    title: "Success Stories and Testimonials",
    description: "Join a community of satisfied clients who have successfully launched their international careers with our support. Our proven track record speaks for itself, and we take pride in the success of those we assist."
  },
  {
    img:network,
    title: "Global Network of Opportunities",
    description: "Our extensive network of partners and employers across various industries ensures that you have access to a wide range of job opportunities tailored to your skill set and career aspirations."
  },
  {
    img:crowd,
    title: "Cultural Orientation and Integration",
    description: "We provide essential resources and training to help you adapt to your new environment, ensuring a smooth cultural transition and helping you feel at home in your new country."
  },
 
]
const services = [
  {
    img:ticket,
    title: "Visa and Immigration Assistance",
    description: "Helping clients navigate the visa application process, ensuring all paperwork and legal requirements are properly handled."
  },
  { img:manv,
    title: "Job Search and Placement",
    description: "Connecting individuals with international job opportunities, tailored to their skills and experience, and assisting in job application processes."
  },
  { img:pixel,
    title: "Resume and Cover Letter Optimization",
    description: "Offering professional resume and cover letter writing services to align with international job market standards."
  },
  { 
    img:interview,
    title: "Interview Preparation and Coaching",
    description: "Providing mock interviews, training, and advice to help clients succeed in international job interviews."
  },
  {  img:relocation,
    title: "Relocation Support",
    description: "Assisting with housing, travel arrangements, and other logistical details to ensure a smooth transition to a new country."
  },
  {
    img:training,
    title: "Cultural Integration and Language Training",
    description: "Offering resources and training to help clients adapt to the culture and language of their new country, easing the transition."
  },
  
];





export default function Home() {


 
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
      const phoneNumber = "+971505033192"; 
      const encodedMessage = encodeURIComponent(`Hello, my name is ${name}. ${message}`);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };
  


useEffect(()=>{
  
    aos.init();
  }, [])

  return (
          <div className="w-full relative h-auto flex flex-col gap-10  bg-[#FFF8F8] ">
                    <div className="fixed w-[70px] h-[50px] rounded-l-full bg-white/10   rounded-lg right-0 top-1/2 z-50  "> <div className="w-[45px] h-auto p-[2px] flex">
                            <Image src={wp} alt="whatsapp-icon" className=" h-full object-contain"      onClick={() => window.open('https://wa.me/+97155033192', '_blank')} />
                    </div>
          </div>
            <section id="hero"  className="relative pb-20 md:pb-0  lg:rounded-b-[100px] pt-14 bg-${hero}"        
           
            >

           <div className="h-full ">
         
                    <Image src={hero}  alt="" className="object-fit h-full w-full absolute z-0  md:h-[90dvh] "/>
            </div>  

            <span className="absolute z-10 h-full w-full bg-gradient-to-br from-white/50  to-blue-300/50">
              
           </span>       
          <div className="grid md:grid-cols-2 gap-10 md:h-[90dvh]   max-w-[1200px] mx-auto relative z-20">
            <div className="  flex flex-col items-center justify-center gap-10   p-10 text-blue-900">
              
              <div>
               <h1>
                   <WordPullUp 
                      className="font-bold text-2xl md:text-5xl 2xl:text-6 text lg:text-nowrap  bg-gradient-to-r from-blue-900 via-gray-500 to-indigo-600 inline-block bg-clip-text"
                      words=" Unlock Global Potential"
                      />
               </h1>
               <h2 className=" text-base md:text-xl my-4 font-semibold indent-8 text-center " data-aos="fade-up">
                We Make Your Journey Abroad Smooth and Stress-Free, From Visa Applications to Landing Your Dream Job
               </h2>
              </div>
            </div>
            <div className=" h-auto  flex justify-center items-center">
                <div className="rounded-xl  p-[28px] md:p-[50px]  min-w-[320px]  shadow-2xl bg-gradient-to-tl from-blue-100 to-blue-100" data-aos="fade-left" data-delay="300">
                <form className="flex flex-col w-full     " action={sendMessage}>
                  <div>
                    <h3 className="font-semibold text-xl pb-5 text-blue-900 ">Lets get in touch</h3>
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
          </div>  
            </section>
             <section id="welcome"  className="mt-20" >
              <div className=" md:grid    lg:grid-cols-8  lg:h-[90dvh] w-[calc(100%-50px)] m-auto ">

                    <div data-aos="fade-left" data-duration="700"  className="lg:col-span-5 flex flex-col gap-5  p-5 md:p-10 lg:p-20 bg-gradient-to-br from-blue-500  to-blue-300   backdrop-blur-lg rounded-3xl   " >
                      <div className="flex flex-col gap-5 justify-center items-center h-full w-full text-blue-950" >
                      <h2 className="font-semibold text-2xl md:3xl">
                        
                        <WordPullUp  className="font-semibold text-2xl md:3xl" words="Welcome to Your Future of Boundless Opportunities "/>
                    </h2>

                        <p className="indent-9 opacity-95">
                          IVIN Consultancy is your gateway to international opportunities. We are dedicated to delivering exceptional services in making your dream of working abroad into reality. By simplifying the process of obtaining foreign work visas and guiding you in every step of the way. With our expertise, we can guarantee that we will assist you to unlock your boundless opportunities worldwide.
                        </p>
                      </div>


                    </div>
                    <div data-aos="fade-right" data-duration="700"   className="flex justify-center items-center lg:col-span-3 h-full w-full p-5 md:p-10 ">
                      <Image className="rounded-xl  w-full aspect-square object-cover"  alt="image" src={image}/>
                    </div>
              </div>

             </section>           

             <section id="trust" className=" w-full h-full bflex  p-5 md:p-10"  data-aos="fade-up" data-duration="200">

              <div className="w-full h-full  bg-gradient-to-br from-blue-400  to-blue-300 rounded-3xl p-5 md:p-20 " >
              <h2 className="text-2xl lg:text-5xl text-center text-white my-10  "> Why choose us?</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    gap-5 ">

              {   chooseUS? chooseUS.map((item,index)=>(
                     <TrustCard   key={index}  img={item.img} title={item.title}  desc={item.description}/>
              )):null
    }
              </div>
     </div>
             </section>
          </div>
  );
}



