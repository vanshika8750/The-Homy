import React from 'react'
import why1 from "../../assets/why1.png"
import why2 from "../../assets/why2.png"
import why3 from "../../assets/why3.png"
import why4 from "../../assets/why4.png"

import "./Why.css"



const Why = () => {
  return (
    <div className='Whygoforhomy' >

  

    <div className="why-cards" >


    <div className="headline" >

<p className='headline-inner' >Why go for the homy?</p>
</div>

    <div className="why1" >
    <img src={why1} alt="" />
    <img className='img-trust' src={why2} alt="" />
    </div>
    <div className="why2 pt-1" >
    <img src={why3} alt="" />
    <img src={why4} alt="" />


    </div>



    </div>
      
    </div>
  )
}

export default Why
