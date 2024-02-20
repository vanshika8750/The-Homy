import React from "react";
import KitchenKingbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import KitchenKingBorder from "../../assets/KitchenKingBorder.svg";
import "./HomyProMax.css";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { IoStarOutline } from "react-icons/io5";
import KitchenKingBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
import KitchenKingMobile from "../../assets/KitchenKingMobile.png";

const Homypromax = () => {
	return (
		<div className="KitchenKing-homypromax">
			<div className="KitchenKing-homypromax-top">
				<div className="KitchenKing-homypromax-upper-background">
					<img className="desktopview" src={KitchenKingbg} />
					<img
						className="mobileview"
						src={KitchenKingBorderMobile}
						alt=""
					/>
				</div>
				<div className="KitchenKing-homypromaximg">
					<img className="desktopview" src={KithcenKingimg} />
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
						Lorem ipsum dolor sit amet consectetur. Iaculis
						tristique pulvinar id neque sed. Tincidunt phasellus
						amet ante quis. Adipiscing at lacinia eget dui hac
						sagittis nunc. Ullamcorper ac risus in aliquet tincidunt
						eget nibh adipiscing id.
					</p>
					<div className="KitchenKing-homypromax-features">
						<p style={{ color: "red"  }}>Kitchen King</p>
						<h3>Choose the plan that’s right for you </h3>
						<ul>
							<li>Well trained staff: 2 cleaner + 1 supervisor </li>
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
					<img className="desktopview" src={KitchenKingBorder} />
				</div>
				<div className="KitchenKing-homypromax-price">
					<ul>
						<li>DAILY</li>
						<li>WEEKLY</li>
						<li>MONTHLY</li>
						<li>HALF YEARLY</li>
						<li>YEARLY&nbsp;&nbsp;&nbsp;</li>
					</ul>
				</div>
				<div className="KitchenKing-homypromax-price KitchenKing-homypromax-price-amount ">
					<ul>
						<li>499&nbsp;&nbsp;</li>
						<li>2,099&nbsp;&nbsp;</li>
						<li>4,499&nbsp;&nbsp;&nbsp;&nbsp;</li>
						<li>22,499 &nbsp;&nbsp;</li>
						<li>35,999</li>
					</ul>
					<div className="connect-button book-now-btn">BOOK NOW</div>
					<h3 className="checkout-plans">Check our other beneficial plans </h3>
				</div>

				<div className="KitchenKing-homypromax-cards">
					<div className="KitchenKing-homypromax-card">
						<h2>
							<IoStarOutline /> HOMY
						</h2>
						<ul>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li className="middle">Lorem ipsum dolor sit amet.</li>
							<li className="middle">Lorem ipsum dolor sit amet.</li>
						</ul>
						<div className="connect-button book-btn">TRY OUT</div>
					</div>
					<div className="KitchenKing-homypromax-card">
						<h2>
							{" "}
							<LiaCrownSolid /> HOMY PRO
						</h2>
						<ul>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li className="middle">Lorem ipsum dolor sit amet.</li>
							<li className="middle">Lorem ipsum dolor sit amet.</li>
						</ul>
						<div className="connect-button book-btn">TRY OUT</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homypromax;
