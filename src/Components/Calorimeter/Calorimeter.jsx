import React, { useState } from "react";
import './Calorimeter.css';

function Calorimeter() {
    const [data, setData] = useState(1000); // Initial value set to 1000

    const handleInputChange = (e) => {
        const newValue = parseInt(e.target.value);
        setData(newValue);
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
