import React, { useEffect, useState } from "react";
import './Slider.css';

function Slider() {
    const [data,setData] = useState(0)
    console.log(data)
    return(
        <div style={{display:'flex',margin:'auto'}}>
            <input className='slider' type="range" min="0" max="100" step="10" value={data} onChange={(e)=>setData(e.target.value)} />
            <h1>{data}</h1>
        </div>
    );
}
export default Slider;