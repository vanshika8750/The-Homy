import React, { useState,useEffect } from 'react'
import Banner from '../../Components/Banner/Banner'
import Description from '../../Components/Description/Description'
import FeatureBanner from '../../Components/FeatureBanner/FeatureBanner'
import Ourservices from '../../Components/Ourservices/Ourservices'
import Why from '../../Components/Why/Why'
import Pricing from '../../Components/Pricing/Pricing'
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet';
import './Home.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom'
import Combos from '../../Components/Combos/Combos'
import AnimatedHeadline from '../../Components/Animation/AnimatedHeadline'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from '../../Components/Gallery/Gallery'
import OurCooks from '../../Components/OurCooks/OurCooks'
import Carousel  from '../../Components/Carousel/Carousel'

const Home = () => {

useEffect(()=>{
  AOS.init();
},[])

  useEffect(() => {
    // Get signupSuccess from localStorage
    const signupSuccess = localStorage.getItem("signupSuccess");
    // console.log('signupSuccess', signupSuccess);

    // Check if signupSuccess is true
    if (signupSuccess === "true") {
        toast.success("Signup Successful");

        // Clear the signupSuccess flag from localStorage after 5 seconds
        setTimeout(() => {
            localStorage.removeItem("signupSuccess");
        }, 5000); // Adjust the time interval as needed (in milliseconds)
    }
}, []);


useEffect(() => {
  // Check if the loginSuccess flag is set in localStorage
  const loginSuccess = localStorage.getItem('loginSuccess');

  // Check if loginSuccess is true
  if (loginSuccess === 'true') {
    toast.success('Login Successful');

    // Clear the loginSuccess flag from localStorage after 5 seconds
    setTimeout(() => {
      localStorage.removeItem('loginSuccess');
      
    }, 5000); // Adjust the time interval as needed (in milliseconds)
  }
}, []);


useEffect(() => {
  // Check if the logoutSuccess flag is set in localStorage
  const logoutSuccess = localStorage.getItem('logoutSuccess');
  if (logoutSuccess) {
      // Show a toast message indicating successful logout
      toast.success('Logout Successful');
      // Clear the logoutSuccess flag from localStorage after some time
      setTimeout(() => {
          localStorage.removeItem('logoutSuccess');
      }, 3000); // Adjust the time as per your requirement
  }
}, []);

useEffect(() => {
  // Check if the logoutSuccess flag is set in localStorage
  const contactSuccess = localStorage.getItem('contactSuccess');
  if (contactSuccess) {
      // Show a toast message indicating successful logout
      toast.success('Your message was sent successfully');
      // Clear the logoutSuccess flag from localStorage after some time
      setTimeout(() => {
          localStorage.removeItem('contactSuccess');
      }, 3000); // Adjust the time as per your requirement
  }
}, []);

  return (
    <div className='home-page content-below-navbar' style={{overflow:'hidden'}}>

    <Helmet>
                <title>The Homy</title>
                <meta name="description" content="
                Private chef
                Chef at home
                Home cook
                Cook for home
                Home chef
                Cook in noida
                Cook services near me
                Cook online noida
                Cook for home
                Cook for home noida
                Cook greater noida
                Home cook near me
                House help in noida
                Domestic maid
                Maid service in noida
                House keeping services
                Domestic help
                House help near me
                House cleaning services noida
                Toilet cleaning services in noida
                Bathroom cleaning services in Noida
                Home cleaning services Noida
                Home cook near me
                House cleaning services noida
                Best bathroom cleaning services in Noida
                Professional bathroom deep cleaning services
                Full home deep cleaning services
                Dusting service
                " />
                
            </Helmet>
    
        <div className="home-height">
        <AnimatedHeadline/>
        <Banner/>
        {/* <Carousel/> */}
        </div>
        <Description/>
        <FeatureBanner/>
        <Why/>
        <Ourservices/>
        <Combos/>
        <Pricing/>
        {/* <Gallery/> */}
{/* <OurCooks/>        */}

        

    
    
    </div>


  )
}

export default Home