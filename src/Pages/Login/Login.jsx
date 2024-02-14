import React,{useState} from 'react'
import mobileview  from '../../assets/mobileview.svg'
import desktopview from '../../assets/ourservicesbackground.svg'
import aboutimg from '../../assets/feature.jpg'
import "./Login.css"
import { Link } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";


const login = () => {
































const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        message: ''
    });
};


  return (
    <div className="login">

    <div
      className="wapper"
      style={{ display: "flex", flexDirection: "column"}}
>


    
      <div className="login-headline">LOGIN</div>

   
      <img src={mobileview} alt="" className='mobileview' />


      <img src={desktopview} alt="" className='desktopview'/>

     

  

      
    </div>

    <div className="login-cards" >

    <img src={aboutimg} alt="" className='aboutusimg' />

     <div className="login-form" >

<form onSubmit={handleSubmit}>

<div className="Signup-link" >
    <p>did't have an account ? <Link to="/signup" className='Signup'>Sign up</Link></p>
</div>
   
   

  
    <div>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            required
        />
    </div>
    <div>
        <input
            type="password"
            id="password"
            name="password"
            value={formData.email}
            placeholder="Password"
            onChange={handleChange}
            required
        /> 
    </div>

    <div className="Forgot-password">
        <Link to="/forgotPassword" className='Forgot-password'>Forgot Password</Link>
    </div>

   
  
    <button className='submit-btn' type="submit" >Login</button>

    <p className='login-other-option-line'>or login in with</p>

    <div className="other-options-login" >
    <div className="By-phone">
   <Link className='By-phone-link'> <FaPhone /></Link> 
    </div>
    <div className="By-google">
   <Link className='By-google-link'> <FaGoogle /></Link>

    </div>
    </div>

</form>

</div>





     

    </div>
 
 </div>
  )
}

export default login
