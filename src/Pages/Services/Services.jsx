import React from "react";
import servicesbackground from "../../assets/servicespagebackground.svg";
import "./services.css";
import servicesbox from "../../assets/servicesbox.svg";
import mobileviewservices from "../../assets/mobileviewservices.svg";
import cookicon from "../../assets/cookicon.svg";
import servicesimg from "../../assets/servicesimg.svg";
import star from "../../assets/star.svg";
import { FaRupeeSign } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import cleanicon from "../../assets/cleanicon.svg";
import toileticon from "../../assets/toileticon.svg";
import servicesreactmobile from "../../assets/servicesreactmobile.svg";
import serviceskitchen from '../../assets/serviceskitchen.svg'
import servicesdustguard from '../../assets/servicesdustguard.svg'
import serviceshygiene from '../../assets/serviceshygiene.svg'
import { Link } from "react-router-dom";

const Services = () => {
	return (
		<div className="Services content-below-navbar">
			<div className="services-upper-background">
				<img className="desktopview" src={servicesbackground} alt="" />
				<img className="mobileview" src={mobileviewservices} alt="" />
			</div>

			<div className="services-lower-background">
				<img className="desktopview" src={servicesbox} alt="" />
				<img className="mobileview" src={servicesreactmobile} alt="" />
			</div>

			<div className="service-headline">
				<h1 style={{overflow:'hidden'}}>What we provide?</h1>

				<div className="services-content">
					<p>The luxury homecare services for your peaceful living. </p>
					<div>
						<p>Commitment, Quality and Trust</p>
						<div>
							We ensure utmost professionalism for every service
							we offer, whether it's cooking, house cleaning or
							toilet cleaning. So, now it's time to sit back and
							relax while we finish your daily chores with
							finesse.
						</div>
					</div>
				</div>
			</div>

			<div className="services-box">
				<div className="service1 first-service">
					<div className="service-title" style={{ padding: ".5rem" }}>
						<h2>Kitchen King</h2>
						<div className="service-icon">
							<img src={cookicon} alt="" />
						</div>

						{/* <div className="booking">
							<img src={star} alt="" />
							<p style={{ paddingTop: "1rem" }}>
								{" "}
								4.9 (5000 bookings)
							</p>
						</div> */}

						<div className="booking-price">
							<h2>
								<FaRupeeSign />
								499
							</h2>
						</div>
						<Link
							to="/Kitchenking"
							className=" Customize-btn pt-2"
							style={{ textDecoration: "none" }}
						>
							<div className="Customize-button">
								Customize your way
								<GoArrowUpRight />
							</div>
						</Link>
					</div>

					<div className="service-image">
						<img src={serviceskitchen} alt="" />
					</div>
				</div>

				<div className="service1 ">
					<div className="service-title" style={{ padding: ".5rem" }}>
						<h2>Dust Guards</h2>
						<div className="service-icon">
							<img src={cleanicon} alt="" />
						</div>

						{/* <div className="booking">
							<img src={star} alt="" />
							<p style={{ paddingTop: "1rem" }}>
								{" "}
								4.8 (4000 bookings)
							</p>
						</div> */}

						<div className="booking-price">
							<h2>
								<FaRupeeSign />
								449
							</h2>
						</div>
						<Link
							to="/Dustguard"
							className=" Customize-btn pt-2"
							style={{ textDecoration: "none" }}
						>
							<div className="Customize-button">
								Customize your way
								<GoArrowUpRight />
							</div>
						</Link>
					</div>

					<div className="service-image">
						<img src={servicesdustguard} alt="" />
					</div>
				</div>

				<div className="service1 last-service">
					<div className="service-title" style={{ padding: ".5rem" }}>
						<h2>Mr. Hygiene</h2>
						<div className="service-icon">
							<img src={toileticon} alt="" />
						</div>

						{/* <div className="booking">
							<img src={star} alt="" />
							<p style={{ paddingTop: "1rem" }}>
								{" "}
								4.9 (4000 bookings)
							</p>
						</div> */}

						<div className="booking-price">
							<h2>
								<FaRupeeSign />
								449
							</h2>
						</div>
						<Link
							to="/hygiene"
							className=" Customize-btn pt-2"
							style={{ textDecoration: "none" }}
						>
							<div className="Customize-button">
								Customize your way
								<GoArrowUpRight />
							</div>
						</Link>
					</div>

					<div className="service-image">
						<img src={serviceshygiene} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
