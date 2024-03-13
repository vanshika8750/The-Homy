import React, { useEffect } from "react";
import img from "../../assets/ourservicesbackground.svg";
import "./ourservices.css";
import card from "../../assets/servicescard.svg";
import kitchenhomeservice from "../../assets/kitchenhomeservice.svg";
import dustguardhomeservice from "../../assets/dustguardhomeservice.svg";
import hygienehomeservice from "../../assets/hygienehomeservice.svg";
import { Link } from "react-router-dom";
import ourservicesbgmb from "../../assets/ourservicesbg.svg";
import servicescombo from "../../assets/servicescombo.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Ourservices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="ourservices" style={{ width: "inherit" }}>
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
            <img data-aos="fade-right" src={kitchenhomeservice} alt="" />

            <p>
              Kitchen king <br />{" "}
              <span
                className="ourservices-span"
                style={{ textDecoration: "none" }}
              >
                Pro-chef
              </span>{" "}
            </p>
          </div>
        </Link>{" "}
        <Link className="link-services" to="/dustguard">
          <div className="cardo">
            <img data-aos="fade-right" src={dustguardhomeservice} alt="" />

            <p>
              Dust Guards <br />{" "}
              <span
                className="ourservices-span"
                style={{ textDecoration: "none" }}
              >
                Cleaning expert
              </span>{" "}
            </p>
          </div>
        </Link>{" "}
        <Link className="link-services" to="/hygiene">
          <div className="cardo">
            <img data-aos="fade-left" src={hygienehomeservice} alt="" />

            <p>
              Mr. Hygiene <br />{" "}
              <span className="ourservices-span">Washroom Cleaner</span>{" "}
            </p>
          </div>
        </Link>{" "}
        <a className="link-services" href="#comboo">
          <div className="cardo">
            <img data-aos="fade-right" src={servicescombo} alt="" />

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
