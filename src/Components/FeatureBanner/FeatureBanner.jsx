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
      Transforming Spaces, Touching Souls. 
      </h1>
      <p>
      Experience the Magic of Home with Our Unique Blend of Care and Comfort. Your Haven, Our Heart.
      </p>
    </div>
  </div>
  )
}

export default FeatureBanner