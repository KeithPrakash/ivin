import Image from "next/image";
import Mission from "../../public/mission.jpg";

import Vision from "../../public/vision.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white h-full">
      <div className=" bg-white h-[14dvh]  md:h-[20dvh]    w-full"></div>

      <section id="vision" className="m-10 " data-aos="fade-left">
        <div className="grid grid-cols-1 lg:grid-cols-2  bg-blue-400 rounded-2xl">
          <div
            data-aos="fade-up"
            className="flex flex-col items-center justify-center text-white p-10 lg:p-14 "
          >
            <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-7 ">Our Vision</h2>

            <p className=" text-base md:text-xl lg:text-2xl indent-4 text-center font-light ">
              {" "}
              To become the most trusted and innovative agency, empowering
              businesses and individuals with cutting-edge solutions that
              inspire growth, creativity, and success.
            </p>
          </div>

          <div className="flex justify-center items-center p-7">
            <Image
              src={Vision}
              className="aspect-square w-full  bg-slate-400  rounded-3xl"
              alt="image"
            />
          </div>
        </div>
      </section>
      <section id="Mission" className="p-10" data-aos="fade-right">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-blue-200 rounded-2xl">
          <div className="flex justify-center items-center  p-7">
            <Image
              src={Mission}
              alt="mission"
              className="aspect-square w-full  bg-slate-400  rounded-3xl"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center text-white p-10 lg:p-14 "
            data-aos="fade-up"
          >
            <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-7 ">Our Mission</h2>

            <p
              className="text-base md:text-xl font-thin lg:text-2xl indent-4 text-center 
  "
            >
              {" "}
              To become the most trusted and innovative agency, empowering
              businesses and individuals with cutting-edge solutions that
              inspire growth, creativity, and success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
