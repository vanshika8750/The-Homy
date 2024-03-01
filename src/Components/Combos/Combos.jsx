import React, { useState, useEffect } from "react";
import "./Combos.css";
import ComboFrame from "../../assets/comboframe.svg";
import combomobile from '../../assets/combomobile.svg'

const Combos = () => {
  const [combosData, setCombosData] = useState([]);
  const [comboHomy, setComboHomy] = useState({});
  const [comboHomyPro, setComboHomyPro] = useState({});
  const [comboHomyProMax, setComboHomyProMax] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://13.236.85.77/api/combopack/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const res = await response.json();
        const data = res.data;
        setCombosData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
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
  console.log(comboHomy);
  console.log(comboHomyPro);
  console.log(comboHomyProMax);

  return (
    <div className="combo-page">
      <div>
        <img className="img-combo" src={ComboFrame} alt="" />
        <img className="img-combo-mob" src={combomobile} alt="" />
      </div>

      <div className="content-div-combo">
        <div className="combo-head">
          <div>Our</div>
          <div className="combo-head-head">Combos</div>
        </div>

        <div className="content-combo">
          <div className="homy-combo">
            <div className="head">{comboHomy?.plan}</div>

            <div className="desc">{comboHomy?.description}</div>

            <div className="priceonetime">
              <div className="price-head">For 1 time cook</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomy?.priceonetimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="pricetwotime">
              <div className="price-head">For 2 time cook</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomy?.pricetwotimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="cont-combo">
              <button>CONTINUE</button>
            </div>
          </div>



          <div className="homypro-combo">

            <div className="head">{comboHomyPro?.plan}</div>

            <div className="desc">{comboHomyPro?.description}</div>

            <div className="priceonetime">
              <div className="price-head">For 1 time cook</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomyPro?.priceonetimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="pricetwotime">
              <div className="price-head">For 2 time cook</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomyPro?.pricetwotimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="cont-combo">
              <button>CONTINUE</button>
            </div>

          </div>



          <div className="homypromax-combo">
            <div className="head">{comboHomyProMax?.plan}</div>

            <div className="desc">{comboHomyProMax?.description}</div>

            <div className="priceonetime">
              <div className="price-head">For 1 time cook</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomyProMax?.priceonetimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="pricetwotime">
              <div className="price-head">For 2 time cook</div>
              <div className="price-flex">
                <div>only @</div>
                <div>{comboHomyProMax?.pricetwotimecook}*</div>
                <div className="percentage">10% off</div>
              </div>
            </div>

            <div className="cont-combo">
              <button>CONTINUE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Combos;
