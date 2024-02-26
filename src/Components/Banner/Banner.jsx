import React from "react";
import "./Banner.css";
import banner from "../../assets/Banner.svg";
import { Link } from "react-router-dom";
import mockup from "../../assets/mockup.mp4";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
	return (
		<div className="Banner">
			<div className="banner-image">
				{/* <img src={banner} alt="" /> */}
				<video src={mockup} muted loop autoPlay playsInline />
			</div>
			<div className="banner-title">
				<p>
					{" "}
					<span className="E-letter">E</span>xperience the{" "}
					<span style={{ color: " #E23744" }}>luxury</span> homecare{" "}
					<br />
					services
				</p>
				<div
					className="connect-button "
					style={{ width: "15vw", height: "3.5vw" }}
				>
					<Link
						to="/Maintenance"
						className="connect-btn"
						style={{ textDecoration: "none" }}
					>
						Get the app now
						<GoArrowUpRight />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
