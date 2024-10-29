const TrustCard =(props)=>{

  const {title,desc}= props;
  return(
    <div className="border border-slate-500 rounded-3xl p-5 md:p-7 items-center  flex flex-col gap-3 drop-shadow-2xl bg-white text-[#301f1f]">
        <div className="w-24 aspect-square animate-pulse bg-slate-600 rounded-xl"></div>
        <h3 className="font-semibold text-xl text-center">{title}</h3>

           <p className=" text-sm text-center ">

                  {desc}
           </p>
    </div>
  )
}

export default TrustCard;