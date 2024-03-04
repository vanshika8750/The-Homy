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

const Home = () => {

  useEffect(() => {
    // Get signupSuccess from localStorage
    const signupSuccess = localStorage.getItem("signupSuccess");
    console.log('signupSuccess', signupSuccess);

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
    <div className='home-page' style={{overflow:'hidden'}}>

    {/* <Helmet>
                <title>The Homy</title>
                <meta name="description" content="
                
                

                " />
                
            </Helmet> */}
    
        <Banner/>
        <Description/>
        <FeatureBanner/>
        <Why/>
        <Ourservices/>
        <Combos/>
        <Pricing/>
       

        

    
    
    </div>
  )
}

export default Home