import React from "react";
import KitchenKingbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import KitchenKingBorder from "../../assets/KitchenKingBorder.svg";
import "./Homypro.css";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { IoStarOutline } from "react-icons/io5";

const Homypro = () => {
	return (
		<div className="KitchenKing-homypro">
			<div className="KitchenKing-homypro-top">
				<div className="KitchenKing-homypro-upper-background">
					<img className="desktopview" src={KitchenKingbg} />
				</div>
				<div className="KitchenKing-homyproimg">
					<img clasname="desktopview" src={KithcenKingimg} />
				</div>
				<div className="KitchenKing-homypro-Heading">
					<h1>HOMY PRO</h1>
				</div>
				<div className="KitchenKing-homypro-content">
					<p>
						Lorem ipsum dolor sit amet consectetur. Iaculis
						tristique pulvinar id neque sed. Tincidunt phasellus
						amet ante quis. Adipiscing at lacinia eget dui hac
						sagittis nunc. Ullamcorper ac risus in aliquet tincidunt
						eget nibh adipiscing id.
					</p>
					<div className="KitchenKing-homypro-features">
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
			<div className="KitchenKing-homypro-bottom">
				<div className="KitchenKing-homypro-lower-background">
					<img className="desktopview" src={KitchenKingBorder} />
				</div>
				<div className="KitchenKing-homypro-price">
					<ul>
						<li>DAILY</li>
						<li>WEEKLY</li>
						<li>MONTHLY</li>
						<li>HALF YEARLY</li>
						<li>YEARLY&nbsp;&nbsp;&nbsp;</li>
					</ul>
				</div>
				<div className="KitchenKing-homypro-price KitchenKing-homypro-price-amount ">
					<ul>
						<li>499&nbsp;&nbsp;</li>
						<li>2,099&nbsp;&nbsp;</li>
						<li>4,499&nbsp;&nbsp;&nbsp;&nbsp;</li>
						<li>22,499 &nbsp;&nbsp;</li>
						<li>35,999</li>
					</ul>
					<div className="connect-button book-now-btn">BOOK NOW</div>
					<h3>Check our other beneficial plans </h3>
				</div>

				<div className="KitchenKing-homypro-cards">
					<div className="KitchenKing-homypro-card">
						<h2>
							{" "}
							<LiaCrownSolid /> HOMY
						</h2>
						<ul>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
						</ul>
						<div className="connect-button book-btn">TRY OUT</div>
					</div>
					<div className="KitchenKing-homypro-card">
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

export default Homypro;
