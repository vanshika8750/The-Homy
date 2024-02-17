import React from "react";
import img from "../../assets/ourservicesbackground.svg";
import "./ourservices.css";
import card from "../../assets/servicescard.svg";

const Ourservices = () => {
  return (
    <div className="ourservices deskview" >

      <div
        className="wapper"
        style={{ display: "flex", flexDirection: "column" }}
      >

        <div className="services-headline">Our Services</div>

        <img src={img} alt="" />
        
      </div>

      <div className="ourservices-cards" >


          <div className="card" >
           <img src={card} alt="" />

           <p >Kitchen king <br />  <span className="ourservices-span"  >Cooks</span> </p>
                  
          </div>
 

          <div className="card" >
           <img src={card} alt="" />

           <p >Mr. Hygiene <br /> <span className="ourservices-span"  >Toilet Cleaner</span>  </p>
                  
          </div>


          <div className="card" >
           <img src={card} alt="" />

           <p >Dust Gards <br /> <span className="ourservices-span"  >House cleaner</span> </p>
                  
          </div>

          <div className="card" >
           <img src={card} alt="" />

           <p > Our Valuable  <br /> <span className="ourservices-span"  >Combos</span> </p>
                  
          </div>

          
       

      </div>
   
   </div>
  );
};

export default Ourservices;
