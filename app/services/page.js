
import ticket from "../../public/tickets.jpg";
import manv from "../../public/manvisa.jpg";
import pixel from "../../public/pexels.jpg";
import interview from  "../../public/interview.jpg"
import relocation from "../../public/relocation.jpg"
import training from "../../public/training.jpg"
import Card from "../components/Card";

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
  
  
  

const Services =()=>{




    return(
      <div className="bg-gradient-to-t from-[#f4ecec] via-[#ddc4c4] to-[#f4ecec] ">
        <div className=" bg-gradient-to-br from-[#815454] via-[#301f1f] to-[#301f1f]  h-[14dvh]  md:h-[20dvh]  rounded-b-2xl w-full">

        </div>
<section  id="services" className="w-full h-full flex  p-5 md:p-10" data-aos="fade-up" data-duration="2000">
        <div className="border rounded-3xl flex flex-col items-center   bg-gradient-to-br from-[#815454] via-[#301f1f] to-[#301f1f]   p-5 md:p-20 w-full ">
             <h2 className="text-2xl lg:text-5xl text-center text-white my-10 ">Our Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5">

                    { services? services.map((item,index)=>(
                                 <Card key={index}  img={item.img} title={item.title}/>
                    )): null

                      
                    }
                         
                         
                  </div>
            <div>

            </div>



               
        </div>

     </section>


      </div>
    

    )
}



export default Services;