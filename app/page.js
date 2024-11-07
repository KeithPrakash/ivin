'use client'

import Image from "next/image";
import Card from "./components/Card";
import TrustCard from "./components/TrustCard";
import Nav from "./components/Nav";
import aos from "aos";
import '../node_modules/aos/dist/aos.css'
import { useEffect } from "react";



const chooseUS= [
  {
    title: "Personalized Guidance Every Step of the Way",
    description: "We understand that every individual’s journey is unique. That’s why we tailor our services to your specific needs, providing one-on-one support from visa applications to job placement, ensuring a smooth transition to your new life abroad."
  },
  {
    title: "Expertise You Can Trust",
    description: "With years of experience in international recruitment and immigration services, our team is equipped with the knowledge and connections to open doors to top global opportunities, offering you the confidence to take the next big step in your career."
  },
  {
    title: "Comprehensive End-to-End Support",
    description: "From preparing for interviews to finding accommodation and settling into a new culture, we offer complete support throughout the entire migration process, making sure you are fully prepared for life in a new country."
  },
  {
    title: "Success Stories and Testimonials",
    description: "Join a community of satisfied clients who have successfully launched their international careers with our support. Our proven track record speaks for itself, and we take pride in the success of those we assist."
  },
  {
    title: "Global Network of Opportunities",
    description: "Our extensive network of partners and employers across various industries ensures that you have access to a wide range of job opportunities tailored to your skill set and career aspirations."
  },
  {
    title: "Cultural Orientation and Integration",
    description: "We provide essential resources and training to help you adapt to your new environment, ensuring a smooth cultural transition and helping you feel at home in your new country."
  },
 
]
const services = [
  {
    title: "Visa and Immigration Assistance",
    description: "Helping clients navigate the visa application process, ensuring all paperwork and legal requirements are properly handled."
  },
  {
    title: "Job Search and Placement",
    description: "Connecting individuals with international job opportunities, tailored to their skills and experience, and assisting in job application processes."
  },
  {
    title: "Resume and Cover Letter Optimization",
    description: "Offering professional resume and cover letter writing services to align with international job market standards."
  },
  {
    title: "Interview Preparation and Coaching",
    description: "Providing mock interviews, training, and advice to help clients succeed in international job interviews."
  },
  {
    title: "Relocation Support",
    description: "Assisting with housing, travel arrangements, and other logistical details to ensure a smooth transition to a new country."
  },
  {
    title: "Cultural Integration and Language Training",
    description: "Offering resources and training to help clients adapt to the culture and language of their new country, easing the transition."
  },
  
];
export default function Home() {
useEffect(()=>{
  
    aos.init();
  }, [])

  return (
          <div className="w-full h-auto flex flex-col gap-10  bg-gradient-to-t from-[#f4ecec] via-[#ddc4c4] to-[#f4ecec]">

            <section id="hero"  className="relative pb-20 md:pb-0  bg-gradient-to-br from-[#815454] via-[#301f1f] to-[#815454] lg:rounded-b-[100px]  "        
            >
              <Nav/>
 
          <div className="grid md:grid-cols-2 gap-10 md:h-[90dvh]   max-w-[1200px] mx-auto">
            <div className="  flex flex-col items-center justify-center gap-10   p-10 text-white">
              
              <div>
              <h1 className="font-semibold text-2xl md:text-5xl text ">Unlock Your <span className="">Global</span> Potential</h1>
              <h2 className=" text-base md:text-xl my-4">
              We Make Your Journey Abroad Smooth and Stress-Free, From Visa Applications to Landing Your Dream Job
              </h2>
              </div>
            </div>
            <div className=" h-auto  flex justify-center items-center">
                <div className="rounded-xl  p-[28px] md:p-[50px]  min-w-[320px]  shadow-2xl bg-gradient-to-tl from-[#c89a9a] to-white">
                <form className="flex flex-col w-full     ">
                  <div>
                    <h3 className="font-semibold text-xl pb-5 text-[#6c4848] ">Lets get in touch</h3>
                  </div>

                     <div className="capitalize flex flex-col gap-5 ">
                        <input className="h-[40px] placeholder-gray-600 bg-slate-400/10 w-full border-b-2  border-[#6c4848]  outline-none ring-0"    placeholder="Name"/>  
                        <input className="h-[40px] placeholder-gray-600 bg-slate-400/10 w-full border-b-2 border-[#6c4848]  outline-none ring-0"    placeholder="Email"/>  
                        <input className="h-[40px] placeholder-gray-600 bg-slate-400/10 w-full border-b-2 border-[#6c4848]   outline-none ring-0"    placeholder="Contact Number"/>  
                
                      <span>    <button className=" transition-all bg-gradient-to-br from-[#815454] via-[#5c4040] to-[#5c4040]  py-2 px-3 rounded-md font-semibold text-white hover:opacity-45">Submit</button></span>
                    
                     </div>

                  </form>
                </div>
                
            </div>

               
          </div>

            </section>
             <section id="welcome" >
              <div className=" md:grid    lg:grid-cols-8  lg:h-[90dvh] w-[calc(100%-50px)] m-auto ">

              <div className="lg:col-span-5 flex flex-col gap-5  p-5 md:p-10 lg:p-20 bg-[#815454]    bg-gradient-to-br from-[#815454] rounded-3xl to-[#815454]  " >
                <div className="flex flex-col gap-5 justify-center items-center h-full w-full text-white" >
                <h2 className="font-semibold text-2xl md:3xl">Welcome to Your Future of Boundless Opportunities </h2>

                   <p className="indent-9 opacity-95">
                   At [Agency Name], we help you take the next step in your career by providing expert guidance for living and working abroad. From visa assistance to securing the right job, we make the migration process simple and stress-free.

Our personalized approach ensures that every step is tailored to your needs, giving you the confidence to pursue global opportunities. Welcome to a future where your career has no borders, and new possibilities await.
                   </p>
                </div>


              </div>
                    <div className="flex justify-center items-center lg:col-span-3 h-full w-full p-5 md:p-10 ">

                      <img className="animate-pulse rounded-xl  w-full aspect-square object-cover"  alt="image" src="https://img.freepik.com/free-vector/flat-coffee-cup-with-top-view_23-2147742078.jpg?t=st=1730092941~exp=1730096541~hmac=98182c26458941be27681da546a6b4c0bc0345de1dbe1f7bf1cd85f0285f9aad&w=740"/>

                    </div>
              </div>

             </section>           
             
              <section  id="services" className="w-full h-full bflex  p-5 md:p-10">
                <div className="border rounded-3xl flex flex-col items-center   bg-gradient-to-br from-[#815454] via-[#301f1f] to-[#301f1f]  p-5 md:p-20 w-full ">
                     <h2 className="text-2xl lg:text-5xl text-center text-white my-10 ">Our Services</h2>
                          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">

                            { services? services.map((item,index)=>(
                                         <Card key={index}  title={item.title}/>
                            )): null

                              
                            }
                                 
                                 
                          </div>
                    <div>

                    </div>



                       
                </div>

             </section>
             <section id="trust" className=" w-full h-full bflex  p-5 md:p-10">

              <div className="w-full h-full bg-[#6c4848]  rounded-3xl p-5 md:p-20 " >
              <h2 className="text-2xl lg:text-5xl text-center text-white my-10  "> Why choose us?</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    gap-5 ">

              {   chooseUS? chooseUS.map((item,index)=>(
                     <TrustCard   key={index}  title={item.title}  desc={item.description}/>
              )):null

    }
       


              </div>
       
      


     </div>
             </section>
          </div>
  );
}



