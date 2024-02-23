import React from "react";
import KitchenKingbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import KitchenKingBorder from "../../assets/KitchenKingBorder.svg";
import "./Homy.css";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import KitchenKingBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
import KitchenKingMobile from "../../assets/KitchenKingMobile.png";
import { Link } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";

const Homy = () => {
	return (
		<div className="KitchenKing-homy">
			<div className="KitchenKing-homy-top">
				<div className="KitchenKing-homy-upper-background">
					<img className="desktopview" src={KitchenKingbg} />
					<img
						className="mobileview"
						src={KitchenKingBorderMobile}
						alt=""
					/>
				</div>
				<div className="KitchenKing-homyimg">
					<img className="desktopview" src={KithcenKingimg} />
					<img
						className="mobileview"
						src={KitchenKingMobile}
						alt=""
					/>
				</div>
				<div className="KitchenKing-homy-Heading">
					<h1>HOMY</h1>
				</div>
				<div className="KitchenKing-homy-content">
					<p>
						Our chefs are trained and experienced in curating
						exquisite meals tailored to your preferences. Whether
						it's a five-course gourmet experience or your favorite
						comfort food, with a keen eye for detail, focus on
						nutrition and calorie count, our chefs ensure you get
						the most delicious food on the table that doesn't
						compromise your health!
					</p>
					<div className="KitchenKing-homy-features">
						<p style={{ color: "red" }}>Kitchen King</p>
						<h3>Choose the plan that’s right for you </h3>
						<ul>
							<li>Chefs with cooking expertise</li>
							<li>Equipped with kitchen kits</li>
							<li>Verified for hygiene and well-trained</li>
							<li>Vaccinated for safety</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="KitchenKing-homy-bottom">
				<div className="KitchenKing-homy-lower-background">
					<img className="desktopview" src={KitchenKingBorder} />
				</div>
				<div className="KitchenKing-homy-price">
					<ul>
						<li>DAILY</li>
						<li>WEEKLY</li>
						<li>MONTHLY</li>
						<li>HALF YEARLY</li>
						<li>YEARLY&nbsp;&nbsp;&nbsp;</li>
					</ul>
				</div>
				<div className="KitchenKing-homy-price KitchenKing-homy-price-amount ">
					<ul>
						<li>499&nbsp;&nbsp;</li>
						<li>2,099&nbsp;&nbsp;</li>
						<li>4,499&nbsp;&nbsp;&nbsp;&nbsp;</li>
						<li>22,499 &nbsp;&nbsp;</li>
						<li>35,999</li>
					</ul>
					<div className="connect-button book-now-btn">BOOK NOW</div>
					<h3 className="checkout-plans-homy">
						Check our other beneficial plans{" "}
					</h3>
				</div>

				<div className="KitchenKing-homy-cards">
					<div className="KitchenKing-homy-card">
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
					<div className="KitchenKing-homy-card">
						<h2>
							{" "}
							<IoDiamondOutline /> HOMY PRO MAX
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

export default Homy;
