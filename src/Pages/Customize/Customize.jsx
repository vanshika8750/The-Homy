import React,{useState} from "react";
import customizebg from "../../assets/customizebg.svg";
import "./customize.css";
import Slider from '../../Components/Slider/Slider'
import Calorimeter from "../../Components/Calorimeter/Calorimeter";
import TimeSlots from "../../Components/TimeSlots/TimeSlots";
import vectorstar from "../../assets/vectorstar.svg"
import homypro from "../../assets/homypro.svg"
import homypromax from "../../assets/homypromax.svg"
import customizationhead from "../../assets/customizationhead.svg"
import cusbgmobile from "../../assets/cusbgmobile.svg"

const Customize = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
      console.log("Selected option:", event.target.value);
    };

    const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedGender(selectedValue);
    console.log("Selected gender:", selectedValue);
    // You can store the selected value somewhere else as per your requirement
  };


  return (
    <div className="customize-page">
      <div className="img-div-customize">
        <img src={customizebg} alt="" className="desktop-cus" />
        <img src={cusbgmobile} alt="" className="mobile-cus" />
      </div>

      <div className="content-div-customize">

        <div className="first-col-customize">
          <div className="first-col-div-customize head-first-cus">
            <div>Let's Customize your way </div>
          </div>

          <div className="first-col-div-customize content-first-cus">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius
            quae vel sed rem, ducimus dignissimos explicabo ad minima, quibusdam
            sequi molestiae commodi pariatur minus veritatis officia corporis
            modi cupiditate!
          </div>

          <div className="first-col-div-customize">
            <div className="your-plan">Your Plan</div>

            <div className="homy-types-cus">
              <div className="homy-cus">
                <div>
                  <img className="star" src={vectorstar} alt=""  />
                </div>
                <div>
                  Homy
                </div>
              </div>
              <div className="homypro-cus">
              <div>
                  <img src={homypro} alt="" />
                </div>
                <div>
                  Homy Pro
                </div>
              </div>
              <div className="homypromax-cus">
              <div>
                  <img src={homypromax} alt=""  />
                </div>
                <div>
                  Homy Pro max
                </div>
              </div>
            </div>

            <div >
              <select className="options-cus" value={selectedOption} onChange={handleChange}>
                <option value="">Select</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="half_yearly">Half Yearly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>
        </div>

        <div className="second-col-customize">
            
            <div style={{textAlign:'center',marginBottom:'20px'}}>
                <img src={customizationhead} alt="" />
            </div>

<div >
            <div className="row-cus gender-cus">
                <div className="head-cus-right">Homy Gender</div>
                <div className="radio-cus">
                <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={selectedGender === "male"}
          onChange={handleGenderChange}
        />
        Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={selectedGender === "female"}
          onChange={handleGenderChange}
        />
        Female
      </label>
                </div>
            </div>

      
      <div  className="row-cus" >
        <div className="head-cus-right">Spicy Meter</div>
              <Slider/>
            </div>

            <div  className="row-cus">
              <div className="head-cus-right">Calorie Meter (Kcal.)</div>
              <Calorimeter/>
            </div>

<div  className="row-cus">

<div className="head-cus-right">Time Slots</div>

<div className="time-slot-text">
  <div>Lorem ipsum dolor sit amet.</div>
  <div style={{fontStyle:'Italic'}}>Lorem ipsum dolor sit amet.</div>
</div>


<div>

<TimeSlots/>

</div>

<div className="btn-cust">
  <button>Continue</button>
</div>

</div>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Customize;
