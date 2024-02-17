import React, { useState,useEffect } from "react";
import './Calorimeter.css';

function Calorimeter() {
    const [data, setData] = useState(1000); // Initial value set to 1000

    const handleInputChange = (e) => {
        let newValue = e.target.value.trim(); // Trim any leading or trailing whitespaces
        // Check if the input is a valid number with at most 4 digits
        if (/^\d{0,4}$/.test(newValue)) {
            setData(newValue === '' ? '' : parseInt(newValue));
        }
    };
    
    

    return (
        <div className="slider-container-cal">
            <input 
                className='slider-cal' 
                type="range" 
                min="1000" 
                max="3000" 
                value={data} 
                onChange={(e) => setData(parseInt(e.target.value))} 
            />
            <div className="slider-marks-cal">
                <div className="mark">1000</div>
                <div className="mark">1500</div>
                <div className="mark">2000</div>
                <div className="mark">2500</div>
                <div className="mark">3000</div>
            </div>
            <div className="cal-display">
                =
                <input 
                    type="number" 
                    value={data} 
                    onChange={handleInputChange} 
                />
            </div>
        </div>
    );
}

export default Calorimeter;
