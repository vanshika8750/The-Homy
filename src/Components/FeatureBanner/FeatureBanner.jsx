import React,{useRef,useEffect} from 'react'
import './FeatureBanner.css'
// import '../Banner/Banner.css'
import video2 from '../../assets/video2.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
const FeatureBanner = () => {
  useEffect(()=>{
		AOS.init({duration:1000});
	  },[])

  return (
     <div className="video-container" >
    <div className="overlay"></div>
    <video data-aos="zoom-in-up" src={video2}  muted loop autoPlay playsInline/>
    <div className="content">
      <h1 data-aos="fade-right">
      Transforming Spaces, Touching Souls.
      </h1>
      <p data-aos="fade-left">
      Experience the Magic of Home with Our Unique Blend of Care and Comfort. Your Haven, Our Heart.
      </p>
    </div>
  </div>
  )
}

export default FeatureBanner