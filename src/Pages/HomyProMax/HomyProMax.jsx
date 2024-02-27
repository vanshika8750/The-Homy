import React from "react";
import KitchenKingbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import KitchenKingBorder from "../../assets/KitchenKingBorder.svg";
import "./HomyProMax.css";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import KitchenKingBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
import KitchenKingMobile from "../../assets/KitchenKingMobile.png";
import KitchenKingBordermid from "../../assets/KitchenKingBordermid.svg";
import KitchenKingbgmid from "../../assets/KitchenKingbgmid.svg";

const Homypromax = () => {
	return (
		<div className="KitchenKing-homypromax">
			<div className="KitchenKing-homypromax-top">
				<div className="KitchenKing-homypromax-upper-background">
					<img className="desktopviewh" src={KitchenKingbg} />
					<img
						className="mobileview"
						src={KitchenKingBorderMobile}
						alt=""
					/>
					<img className="midviewkkh" src={KitchenKingbgmid} alt="" />
				</div>
				<div className="KitchenKing-homypromaximg">
					<img className="desktopviewh" src={KithcenKingimg} />
					<img
						className="mobileview"
						src={KitchenKingMobile}
						alt=""
					/>
				</div>
				<div className="KitchenKing-homypromax-Heading">
					<h1>HOMY PRO MAX</h1>
				</div>
				<div className="KitchenKing-homypromax-content">
					<p>
						Our chefs are trained and experienced in curating
						exquisite meals tailored to your preferences. Whether
						it's a five-course gourmet experience or your favorite
						comfort food, with a keen eye for detail, focus on
						nutrition and calorie count, our chefs ensure you get
						the most delicious food on the table that doesn't
						compromise your health!
					</p>
					<div className="KitchenKing-homypromax-features">
						<p style={{ color: "red" }}>Kitchen King</p>
						<h3>Choose the plan that’s right for you </h3>
						<ul>
							<li>
								Well trained staff: 2 cleaner + 1 supervisor{" "}
							</li>
							<li>Professional & experienced </li>
							<li>Equipped with cleaning kit </li>
							<li>Professional & experienced</li>
							<li>Adaptable to all requirements</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="KitchenKing-homypromax-bottom">
				<div className="KitchenKing-homypromax-lower-background">
					<img className="desktopviewh" src={KitchenKingBorder} />
					<img className="midviewkkh" src={KitchenKingBordermid} />
				</div>
				<div className="KitchenKing-homypromax-price">
					<div className="KitchenKing-homypromax-table">
						<div className="pricecard">
							DAILY
							<br />
							<span className="red">499</span>
						</div>
						<div className="pricecard">
							WEEKLY
							<br />
							<span className="red">2,099</span>
						</div>
						<div className="pricecard">
							MONTHLY
							<br />
							<span className="red">4,499</span>
						</div>
						<div className="pricecard">
							HALF YEARLY
							<br />
							<span className="red">22,499</span>
						</div>
						<div className="pricecard">
							YEARLY
							<br />
							<span className="red">35,999</span>
						</div>
					</div>
					<div className="connect-button book-now-btnh">BOOK NOW</div>
					<h3 className="checkout-plansh">
						Check our other beneficial plans{" "}
					</h3>
				</div>

				<div className="KitchenKing-homypromax-cards">
					<div className="KitchenKing-homypromax-card">
						<h2>
							{" "}
							<IoDiamondOutline /> HOMY
						</h2>
						<ul>
							<li>
								Access to all premium nutrition & workout plans
							</li>
							<li>5-star professional chef at home</li>
							<li className="middle">
								Customizable gourmet meals
							</li>
							<li className="middle">
								Get dietician once a month
							</li>
						</ul>
						<Link to="/homy">
							<div className="connect-button book-btn">
								BOOK NOW
							</div>
						</Link>
					</div>
					<div className="KitchenKing-homypromax-card">
						<h2>
							{" "}
							<LiaCrownSolid /> HOMY PRO
						</h2>
						<ul>
							<li>Versatile culinary expert </li>
							<li>Skilled in crafting diverse dishes.</li>
							<li>Possesses a professional degree</li>
							<li className="middle">
								Equipped with kitchen kits
							</li>
							<li className="middle">Vaccinated for safety</li>
						</ul>{" "}
						<Link to="/homypro">
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

export default Homypromax;
