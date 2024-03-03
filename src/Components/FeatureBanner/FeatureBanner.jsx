import React,{useRef} from 'react'
import './FeatureBanner.css'
// import '../Banner/Banner.css'
import video2 from '../../assets/video2.mp4'

const FeatureBanner = () => {

  return (
     <div className="video-container" >
    <div className="overlay"></div>
    <video src={video2}  muted loop autoPlay playsInline/>
    <div className="content">
      <h1>
      Like what you see?  
      </h1>
      <p>
      Picture the same on your table presented to you with ease, sophistication and commitment. It's time to experience comfort at its finest! 
      </p>
    </div>
  </div>
  )
}

export default FeatureBanner