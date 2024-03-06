import React,{useState} from 'react'
import './ForgotPassword.css'
import fPD from '../../assets/forgotPasswordDesktop.svg'
import fPleft from '../../assets/fp-left.svg'

const ForgotPassword = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form Data:', formData);
  };

  return (
    <div className='fp-page content-below-navbar'>
        

        <div
      className=""
      style={{ display: "flex", flexDirection: "column"}}
>
    
      <div className="fp-headline" >
        <div>FORGOT</div>
        <div>YOUR</div>
        <div>PASSWORD</div>
      </div>

      {/* <img src={fPD} alt="" className='mobileview' /> */}
      
      <img src={fPD} alt=""  className='desktop-fp'/>
    </div>


        <div className='content-fp-page'>

        <div className="left-fp">
          <img src={fPleft} alt="" />
        </div>

        <div className="right-fp">
          
          <div className="content-fp">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus iure dolor atque eos eius? Ad, voluptate laboriosam! Quisquam laborum possimus cumque voluptatibus, sint sunt expedita?
          </div>

          <div className='form-fp'>
          <form onSubmit={handleSubmit}>

        <div>

          <input
            type="email"
            name="email"
            placeholder='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
         
          <input
            type="password"
            name="password"
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
         
          <input
            type="password"
            name="confirmPassword"
            placeholder='confirm password'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className='btn-div-fp'>
        <button type="submit">Sign In</button>
        </div>

      </form>

          </div>

        </div>
        </div>
    </div>
  )
}

export default ForgotPassword