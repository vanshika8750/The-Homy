import React from "react";
import img from "../../assets/ourservicesbackground.svg";
import "./ourservices.css";
import card from "../../assets/servicescard.svg";
import kitchenhomeservice from '../../assets/kitchenhomeservice.svg'
import dustguardhomeservice from '../../assets/dustguardhomeservice.svg'
import hygienehomeservice from '../../assets/hygienehomeservice.svg'
import { Link } from "react-router-dom";
import ourservicesbgmb from '../../assets/ourservicesbg.svg'

const Ourservices = () => {
  return (
    <div className="ourservices">
      <div
        className="wapper"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="services-headline">Our Services</div>

        <img className="img-ourservices" src={img} alt="" />
        <img className="imgmb-ourservices" src={ourservicesbgmb} alt="" />

      </div>

      <div className="ourservices-cards">
        <Link className="link-services" to="/Kitchenking">
          <div className="cardo">
            <img src={kitchenhomeservice} alt="" />

            <p>
              Kitchen king <br />{" "}
              <span
                className="ourservices-span"
                style={{ textDecoration: "none" }}
              >
                Cooks
              </span>{" "}
            </p>
          </div>
        </Link>{" "}
        <Link className="link-services" to="/dustguard">
          <div className="cardo">
            <img src={dustguardhomeservice} alt="" />

            <p>
              Dust Guards <br />{" "}
              <span
                className="ourservices-span"
                style={{ textDecoration: "none" }}
              >
                House cleaner
              </span>{" "}
            </p>
          </div>
        </Link>{" "}
        <Link className="link-services" to="/hygiene">
          <div className="cardo">
            <img src={hygienehomeservice} alt="" />

            <p>
              Mr. Hygiene <br />{" "}
              <span className="ourservices-span">Washroom Cleaner</span>{" "}
            </p>
          </div>
        </Link>{" "}
        <a className="link-services" href="#comboo">
          <div className="cardo">
            <img src={kitchenhomeservice} alt="" />

            <p>
              {" "}
              Our Valuable <br />{" "}
              <span
                className="ourservices-span"
                style={{ textDecoration: "none" }}
              >
                Combos
              </span>{" "}
            </p>
          </div>
        </a>{" "}
      </div>
    </div>
  );
};

export default Ourservices;
