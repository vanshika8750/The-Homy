import React from 'react'
import servicesbackground from "../../assets/servicespagebackground.svg"
import "./services.css"
import servicesbox from "../../assets/servicesbox.svg"
import mobileviewservices from "../../assets/mobileviewservices.svg"
import cookicon from "../../assets/cookicon.svg"
import servicesimg from "../../assets/servicesimg.svg"
import star from "../../assets/star.svg"
import { FaRupeeSign } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import cleanicon from "../../assets/cleanicon.svg"
import toileticon from "../../assets/toileticon.svg"
import servicesreactmobile from "../../assets/servicesreactmobile.svg"

import {Link} from "react-router-dom"

const Services = () => {
  return (
    <div className='Services'>

    

    <div className="services-upper-background">
    <img className='desktopview' src={servicesbackground} alt="" />
    <img className='mobileview' src={mobileviewservices} alt="" />
    </div>


    <div className="services-lower-background">
    <img className='desktopview' src={servicesbox} alt="" />
    <img className='mobileview' src={servicesreactmobile} alt="" />
    </div>

    <div className="service-headline" >
    
    <h1>What we provide?</h1>

    <div className="services-content">
    <p>The luxury homecare services</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe explicabo dolores iusto omnis maxime. Veniam excepturi iusto laudantium eum vitae!.
    </p>

    </div>
  
    </div>
  

      <div className="services-box" > 


          <div className="service1" >

              <div className="service-title"  style={{padding:".5rem"}}>
               
               <h2>Kitchen King</h2>
               <div className="service-icon">
                   <img src={cookicon} alt="" />
               </div>

               <div className="booking" >
                   <img src={star} alt=""  />
                   <p   style={{paddingTop:"1rem"}}> 4.9 (5000 bookings)</p>
               </div>
               
               <div className="booking-price">
                   <h2 ><FaRupeeSign />499</h2>

                  
               </div>
               <div className="Customize-button">
           <Link to="/" className=" Customize-btn pt-2">
           Customize your way
            <GoArrowUpRight />
          </Link>

           </div>

              </div>

              <div className="service-image"  >
             <img src={servicesimg} alt="" />
              </div>

          </div>




          <div className="service1 ">

<div className="service-title"  style={{padding:".5rem"}}>
 
 <h2>Dust Guards</h2>
 <div className="service-icon">
     <img src={cleanicon} alt="" />
 </div>

 <div className="booking" >
     <img src={star} alt=""  />
     <p   style={{paddingTop:"1rem"}}> 4.8 (4000 bookings)</p>
 </div>
 
 <div className="booking-price">
     <h2 ><FaRupeeSign />449</h2>

    
 </div>
 <div className="Customize-button">
<Link to="/" className=" Customize-btn pt-2">
Customize your way
<GoArrowUpRight />
</Link>

</div>

</div>

<div className="service-image"  >
<img src={servicesimg} alt="" />
</div>

</div>
 



 <div className="service1 ">

<div className="service-title"  style={{padding:".5rem"}}>
 
 <h2>Mr. Hygiene</h2>
 <div className="service-icon">
     <img src={toileticon} alt="" />
 </div>

 <div className="booking" >
     <img src={star} alt=""  />
     <p   style={{paddingTop:"1rem"}}> 4.9 (4000 bookings)</p>
 </div>
 
 <div className="booking-price">
     <h2 ><FaRupeeSign />449</h2>

    
 </div>
 <div className="Customize-button">
<Link to="/" className=" Customize-btn pt-2">
Customize your way
<GoArrowUpRight />
</Link>

</div>

</div>

<div className="service-image"  >
<img src={servicesimg} alt="" />
</div>

</div>
 

        
   </div>
    
     



     
        
      


    </div>
  )
}

export default Services