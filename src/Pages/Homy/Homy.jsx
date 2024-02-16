import React from "react";
import KitchenKingbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import KitchenKingBorder from "../../assets/KitchenKingBorder.svg";
import "./Homy.css";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import KitchenKingBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
import KitchenKingMobile from "../../assets/KitchenKi	ngMobile.png";

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
						Lorem ipsum dolor sit amet consectetur. Iaculis
						tristique pulvinar id neque sed. Tincidunt phasellus
						amet ante quis. Adipiscing at lacinia eget dui hac
						sagittis nunc. Ullamcorper ac risus in aliquet tincidunt
						eget nibh adipiscing id.
					</p>
					<div className="KitchenKing-homy-features">
						<p style={{ color: "red" }}>Kitchen King</p>
						<h3>Choose the plan that’s right for you </h3>
						<ul>
							<li>lorel ipsum lorel ipsum </li>
							<li>lorel ipsum lorel ipsum </li>
							<li>lorel ipsum lorel ipsum </li>
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
					<h3 className="checkout-plans">
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
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
						</ul>
						<div className="connect-button book-btn">TRY OUT</div>
					</div>
					<div className="KitchenKing-homy-card">
						<h2>
							{" "}
							<IoDiamondOutline /> HOMY PRO MAX
						</h2>
						<ul>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
						</ul>
						<div className="connect-button book-btn">TRY OUT</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homy;
