import React from "react";
import { Link } from "react-router-dom";
import "./Dustguard.css";
import DustGuardbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import DustGuardBorder from "../../assets/KitchenKingBorder.svg";
import Pricing from "../../Components/Pricing/Pricing";
import HomyFeatures from "../../assets/HomyFeatures.png";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { IoStarOutline } from "react-icons/io5";
import HomyFeaturesMobile from "../../assets/HomyFeaturesMobile.png";
import DustGuardMobile from "../../assets/KitchenKingMobile.png";
import DustGuardBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
const DustGuard = () => {
	return (
		<div className="DustGuard">
			<div className="DustGuard-top">
				<div className="DustGuard-upper-background">
					<img className="desktopview" src={DustGuardbg} />
					<img
						className="mobileview"
						src={DustGuardBorderMobile}
						alt=""
					/>
				</div>
				<div className="DustGuardimg ">
					<img className="desktopview" src={KithcenKingimg} />
					<img className="mobileview" src={DustGuardMobile} alt="" />
				</div>
				<div className="DustGuard-Heading ">
					<h1>Dust Guards</h1>
				</div>
				<div className="DustGuard-content desktopview">
					<p>
						Our skilled cleaners uphold the highest standards of
						DustGuard and precision, leaving no tile unpolished and no
						fixture untouched. With an unwavering commitment to
						excellence, we ensure restoring your restroom to
						pristine luxury.
					</p>
				</div>

				<div className="DustGuard-content-m mobileview">
					Our skilled cleaners uphold the highest standards of DustGuard
					and precision, leaving no tile unpolished and no fixture
					untouched. With an unwavering commitment to excellence, we
					ensure restoring your restroom to pristine luxury.
					<p></p>
				</div>
				<div className="connect-button Kitchen-button">BOOK NOW</div>
			</div>
			<div className="DustGuard-bottom">
				<div className="DustGuard-lower-background">
					<img className="desktopview" src={DustGuardBorder} />
				</div>
				<div className="KitchenFeatures">
					<img className="desktopview" src={HomyFeatures} alt="" />
					<img src={HomyFeaturesMobile} className="mobileview" />
				</div>
				<div className="KitchenOptions"></div>

				<div className="DustGuard-cards">
					<div className="DustGuard-card">
						<h2>
							<IoStarOutline /> HOMY
						</h2>
						<ul>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
							<li>Lorem ipsum dolor sit amet.</li>
						</ul>
						<div className="connect-button book-btn">BOOK NOW</div>
					</div>
					<div className="DustGuard-card">
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
						<div className="connect-button book-btn">BOOK NOW</div>
					</div>
					<div className="DustGuard-card">
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
						<div className="connect-button book-btn">BOOK NOW</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DustGuard;
