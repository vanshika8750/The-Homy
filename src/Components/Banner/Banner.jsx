import React, { useEffect } from "react";
import "./Banner.css";
import banner from "../../assets/Banner.svg";
import { Link } from "react-router-dom";
import mockup from "../../assets/mockup.mp4";
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  return (

    <div className="banner">
      <div class="Section_top">
        <div class="content">
        
           <div className="head-banner">
            <div>Experience Luxury Homecare </div>
            <div>Services</div>
           </div>
          
          <div>
            <Link to='/services'><button>Book Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
