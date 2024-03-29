import React, { useState, useEffect } from "react";
import "./Combos.css";
import ComboFrame from "../../assets/comboframe.svg";
import combomobile from '../../assets/combomobile.svg'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const Combos = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [combosData, setCombosData] = useState([]);
  const [comboHomy, setComboHomy] = useState({});
  const [comboHomyPro, setComboHomyPro] = useState({});
  const [comboHomyProMax, setComboHomyProMax] = useState({});
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://thehomy.co/api/combopack/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const res = await response.json();
        const data = res.data;
        setCombosData(data);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (combosData.length > 0) {
      setComboHomy(combosData[0]);
      setComboHomyPro(combosData[1]);
      setComboHomyProMax(combosData[2]);
    }
  }, [combosData]);


  return (
    <div className="combo-page" id="comboo">
      {/* <div>
        <img className="img-combo" src={ComboFrame} alt="" />
        <img className="img-combo-mob" src={combomobile} alt="" />
      </div> */}

      <div className="content-div-combo">
        <div data-aos="flip-up" className="combo-head">
          <div>Our</div>
          <div className="combo-head-head">Combos</div>
        </div>

        <div className="content-combo">
          <div data-aos="fade-right"  className="homy-combo combo-container">
            <div className="head">{comboHomy?.plan}</div>

            <div className="desc">{comboHomy?.description}</div>

            <div className="priceonetime" >
              <div className="price-head">With 1 time cook</div>
              <div className="text-cut">@ 10,344 *</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomy?.priceonetimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="pricetwotime" >
              <div className="price-head">With 2 time cook</div>
              <div className="text-cut">@ 14,843 *</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomy?.pricetwotimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="combo-overlay">
             <Link to='/contactus'> <button className="btn-book-now">Book Now</button></Link>
            </div>

            {/* <div className="cont-combo">
              <button>CONTINUE</button>
            </div> */}
          </div>



          <div data-aos="zoom-out"  className="homypro-combo combo-container">

            <div className="head">{comboHomyPro?.plan}</div>

            <div className="desc">{comboHomyPro?.description}</div>

            <div className="priceonetime" >
              <div className="price-head">With 1 time cook</div>
              <div className="text-cut">@ 29,694 *</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomyPro?.priceonetimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="pricetwotime" >
              <div className="price-head">With 2 time cook</div>
              <div className="text-cut">@ 47,693 *</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomyPro?.pricetwotimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="combo-overlay">
             <Link to='/contactus'> <button className="btn-book-now">Book Now</button></Link>
            </div>
            {/* <div className="cont-combo">
              <button>CONTINUE</button>
            </div> */}

          </div>



          <div data-aos="fade-left"  className="homypromax-combo combo-container">
            <div className="head">{comboHomyProMax?.plan}</div>

            <div className="desc">{comboHomyProMax?.description}</div>

            <div className="priceonetime">
              <div className="price-head">With 1 time cook</div>
              <div className="text-cut">@ 62,544 *</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomyProMax?.priceonetimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="pricetwotime">
              <div className="price-head">With 2 time cook</div>
              <div className="text-cut">@ 107,543 *</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomyProMax?.pricetwotimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>
            <div className="combo-overlay">
             <Link to='/contactus'> <button className="btn-book-now">Book Now</button></Link>
            </div>

            {/* <div className="cont-combo">
              <button>CONTINUE</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combos;
