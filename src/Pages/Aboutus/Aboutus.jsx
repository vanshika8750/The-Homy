import React from 'react'
import card from '../../assets/servicescard.svg'
import mobileview  from '../../assets/mobileview.svg'
import desktopview from '../../assets/ourservicesbackground.svg'
import './aboutus.css'
import aboutimg from '../../assets/feature.jpg'

const Aboutus = () => {
  return (
    <div className="aboutus" >

    <div
      className="wapper"
      style={{ display: "flex", flexDirection: "column" }}
>


    
      <div className="aboutus-headline">Who We Are ?</div>

   
      <img src={mobileview} alt="" className='mobileview' />


      <img src={desktopview} alt=""  className='desktopview'/>

     

  

      
    </div>

    <div className="aboutus-cards" >


        <div className="card" >
        <p className='first-para'>We are <span style={{fontWeight:"200px"}}>The Homy</span>! The luxury service provider for your comfort</p>

         <p >Our organizational mission prioritizes tailored customer satisfaction and upholds unwavering integrity in all interactions. We set the benchmark for excellence through professionalism and premium care. Embracing innovation, we leverage technology to elevate home care experiences. Respect, empathy, and safety are foundational, with rigorous vetting and privacy protocols in place. Additionally, we are committed to sustainability, integrating Eco-conscious practices for a greener future across all operations.</p>
                
        </div>





     

    </div>
 
 </div>
  )
}

export default Aboutus