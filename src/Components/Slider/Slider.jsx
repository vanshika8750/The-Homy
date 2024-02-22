import React, { useEffect, useState } from "react";
import './Slider.css';
import { useCustomizationContext} from '../Context/CustomizationContext'
function Slider() {
    const {data,setData} = useCustomizationContext(0)
    return(
            <div style={{display:'flex',margin:'auto'}}>
            <input className='slider' type="range" min="0" max="5" value={data} onChange={(e)=>setData(e.target.value)} />
            <h1>{data}</h1>
        </div>
    );
}
export default Slider;