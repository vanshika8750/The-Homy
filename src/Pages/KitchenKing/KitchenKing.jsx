import React from "react";
import { Link } from "react-router-dom";
import "./KitchenKing.css";
import KitchenKingbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import KitchenKingBorder from "../../assets/KitchenKingBorder.svg";
import Pricing from "../../Components/Pricing/Pricing";
import HomyFeatures from "../../assets/HomyFeatures.png";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { IoStarOutline } from "react-icons/io5";
import HomyFeaturesMobile from "../../assets/HomyFeaturesMobile.png";
import KitchenKingMobile from "../../assets/KitchenKingMobile.png";
import KitchenKingBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
const KitchenKing = () => {
	return (
		<div className="KitchenKing">
			<div className="KitchenKing-top">
				<div className="KitchenKing-upper-background">
					<img className="desktopview" src={KitchenKingbg} />
					<img
						className="mobileview"
						src={KitchenKingBorderMobile}
						alt=""
					/>
				</div>
				<div className="KitchenKingimg ">
					<img className="desktopview" src={KithcenKingimg} />
					<img
						className="mobileview"
						src={KitchenKingMobile}
						alt=""
					/>
				</div>
				<div className="KitchenKing-Heading ">
					<h1>KITCHEN KING</h1>
				</div>
				<div className="KitchenKing-content desktopview">
					
						Our chefs are trained and experienced in curating
						exquisite meals tailored to your preferences. Whether
						it's a five-course gourmet experience or your favorite
						comfort food, with a keen eye for detail, focus on
						nutrition and calorie count, our chefs ensure you get
						the most delicious food on the table that doesn't
						compromise your health!
					
				</div>

				<div className="KitchenKing-content-m mobileview">
				Our chefs are trained and experienced in curating
						exquisite meals tailored to your preferences. Whether
						it's a five-course gourmet experience or your favorite
						comfort food, with a keen eye for detail, focus on
						nutrition and calorie count, our chefs ensure you get
						the most delicious food on the table that doesn't
						compromise your health!
					<p></p>
				</div>
				<Link to='/customize'>
				<div className="connect-button Kitchen-button">BOOK NOW</div>

				</Link>
			</div>
			<div className="KitchenKing-bottom">
				<div className="KitchenKing-lower-background">
					<img className="desktopview" src={KitchenKingBorder} />
				</div>
				<div className="KitchenFeatures">
					<img className="desktopview" src={HomyFeatures} alt="" />
					<img src={HomyFeaturesMobile} className="mobileview" />
				</div>
				<div className="KitchenOptions"></div>

				<div className="KitchenKing-cards">
					<div className="KitchenKing-card">
						<h2>
							<IoStarOutline /> HOMY
						</h2>
						<ul>
							<li>Chefs with cooking expertise</li>
							<li>Equipped with kitchen kits</li>
							<li>
								Verified for hygiene and <br />
								well-trained
							</li>
							<li>Vaccinated for safety</li>
							<li style={{listStyle:'none'}}><br/></li>

						</ul>
						<Link to="/homy">
							<div className="connect-button book-btn">
								BOOK NOW
							</div>
						</Link>
					</div>
					<div className="KitchenKing-card">
						<h2>
							{" "}
							<LiaCrownSolid /> HOMY PRO
						</h2>
						<ul>
							<li>Versatile culinary expert </li>
							<li>Skilled in crafting diverse dishes.</li>
							<li>Possesses a professional degree</li>
							<li>Equipped with kitchen kits</li>
							<li>Vaccinated for safety</li>
						</ul>{" "}
						<Link to="/homypro">
							<div className="connect-button book-btn">
								BOOK NOW
							</div>
						</Link>
					</div>
					<div className="KitchenKing-card">
						<h2>
							{" "}
							<IoDiamondOutline /> HOMY PRO MAX
						</h2>
						<ul>
							<li>
								Access to all premium nutrition & workout plans
							</li>
							<li>5-star chef at home</li>
							<li>Customizable gourmet meals</li>
							<li>Get dietician once a month</li>
						</ul>
						<Link to="/homypromax">
							<div className="connect-button book-btn">
								BOOK NOW
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KitchenKing;
