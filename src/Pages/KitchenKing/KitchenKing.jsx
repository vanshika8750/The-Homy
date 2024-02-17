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
					<img className="mobileview" src={KitchenKingBorderMobile} alt="" />

				</div>
				<div className="KitchenKingimg ">
					<img className="desktopview" src={KithcenKingimg} />
					<img className="mobileview" src={KitchenKingMobile} alt="" />
				</div>
				<div className="KitchenKing-Heading ">
					<h1>KITCHEN KING</h1>
				</div>
				<div className="KitchenKing-content desktopview">
					<p>
						Lorem ipsum dolor sit amet consectetur. Iaculis
						tristique pulvinar id neque sed. Tincidunt phasellus
						amet ante quis. Adipiscing at lacinia eget dui hac
						sagittis nunc. Ullamcorper ac risus in aliquet tincidunt
						eget nibh adipiscing id.
					</p>
				</div>

					<div className="KitchenKing-content-m mobileview" >
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatum maxime dignissimos esse praesentium. Est sunt incidunt numquam porro!
						<p></p>
					</div>
				<div className="connect-button Kitchen-button">BOOK NOW</div>
			</div>
			<div className="KitchenKing-bottom">
				<div className="KitchenKing-lower-background">
					<img className="desktopview" src={KitchenKingBorder} />
				</div>
				<div className="KitchenFeatures">
					<img className='desktopview'src={HomyFeatures} alt="" />
					<img src={HomyFeaturesMobile} className="mobileview" />
				</div>
				<div className="KitchenOptions"></div>




				<div className="KitchenKing-cards">
					<div className="KitchenKing-card">
						<h2><IoStarOutline /> HOMY</h2>
						<ul>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
					
						</ul>
						<div className="connect-button book-btn">BOOK NOW</div>
					</div>
					<div className="KitchenKing-card">
						<h2> <LiaCrownSolid /> HOMY PRO</h2>
						<ul>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
					
						</ul>
						<div className="connect-button book-btn">BOOK NOW</div>
					</div>
					<div className="KitchenKing-card">
						<h2> <IoDiamondOutline /> HOMY PRO MAX</h2>
						<ul>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
					
						</ul>
						<div className="connect-button book-btn">BOOK NOW</div>
					</div>
				
				</div>
			</div>
		</div>
	);
};

export default KitchenKing;
