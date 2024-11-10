import Image from "next/image";



const Card =(props)=>{
  const {title,img} =props;
  return(
    <div className=" p-5  lg:p-8 rounded-3xl flex flex-col gap-4  shadow-2xl  bg-white text-[#301f1f]">
      <div className="flex justify-center items-center">
      <Image  src={img}  alt="image"className="rounded-xl aspect-square object-cover  bg-slate-600 w-full " /> 
      </div>   
    <div>
    <h3 className="font-semibold md:text-xl text-center">{title}</h3>
    
    </div>




</div>
  )
}

export default Card;