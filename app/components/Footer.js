

const Footer=()=>{
  return(
    <div className="bg-gradient-to-br from-[#815454] via-[#301f1f] to-[#301f1f] w-full  p-6 md:p-7  lg:p-20 rounded-t-3xl ">

<div className="grid lg:grid-cols-2 text-white w-full ">
      <div>logo</div>
      <div className="flex justify-center gap-7">
         <div className="flex flex-col gap-2  text-xs"> 
            <h4 className="text-base">Address</h4>
              <div>g-22 Kotugods</div>  
               <div>g-22 Kotugods</div>     
               <div>g-22 Kotugods</div>    
                <div>g-22 Kotugods</div>
         </div>  <div className="flex flex-col gap-2  text-xs"> 
            <h4 className="text-base">Contact</h4>
              <div>+94 72 383 73939</div>  
               <div>test233@gmail.com</div>     
               <div>some infor</div>    
                <div>g-22 Kotugods</div>
         </div>  <div className="flex flex-col gap-2  text-xs"> 
            <h4 className="text-base">Address</h4>
              <div>g-22 Kotugods</div>  
               <div>g-22 Kotugods</div>     
               <div>g-22 Kotugods</div>    
                <div>g-22 Kotugods</div>
         </div>

      </div>
    </div>
     <div className="w-full border- h-[1px] border-white my-10 bg-gradient-to-r from-[#433737] via-[#e8d5d5] to-[#301f1f] rounded-full ">
   <div className="p-10 flex justify-between text-xs text-white">
     <div>© 2024 Your Company, Inc. All rights reserved.</div>    <div className="flex gap-6">
    <img src="/fbIcon.png" />   <img src="/instaIcon.png" />   <img  src="/wpIcon.png"/>   <img  src="/linkIcon.png"/>
      
      <div/>
   </div>
     </div>
    </div>
    </div>
  
  )
}


export default Footer;