import React, { useEffect, useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg7 from '../../assets/bg7.jpg';
import bg8 from '../../assets/bg8.jpg';
import CarouselFadeExample from "../Carousel/Carousel";
// import bg9 from '../../assets/bg9.jpg';



// Define the array of background images
const bgImages = [
  bg1,bg2,bg7,bg8
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => (index + 1) );
    }, 2000); 

    return () => clearInterval(interval);
  }, []);
  const image=bgImages[index%bgImages.length]

  return (
    <div className="banner" >
      <CarouselFadeExample/>
        <div className="content">
          <div className="head-banner">
            <div>
              Experience <span className="luxury">Luxury</span> Homecare
            </div>
            <div>Services</div>
          </div>
          <div>
            <Link to="/services">
              <button>Book Now</button>
            </Link>
          </div>
        </div>
        <div className="slanting" style={{ color: "white" }}></div>
     
    </div>
  );
};

export default Banner;
