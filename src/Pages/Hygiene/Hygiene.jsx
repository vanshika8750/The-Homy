import React from "react";
import { Link } from "react-router-dom";
import "./hygiene.css";
import hygienebg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import hygieneBorder from "../../assets/KitchenKingBorder.svg";
import Pricing from "../../Components/Pricing/Pricing";
import HomyFeatures from "../../assets/HomyFeatures.png";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { IoStarOutline } from "react-icons/io5";
import HomyFeaturesMobile from "../../assets/HomyFeaturesMobile.png";
import hygieneMobile from "../../assets/KitchenKingMobile.png";
import hygieneBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
const hygiene = () => {
	return (
		<div className="hygiene">
			<div className="hygiene-top">
				<div className="hygiene-upper-background">
					<img className="desktopview" src={hygienebg} />
					<img
						className="mobileview"
						src={hygieneBorderMobile}
						alt=""
					/>
				</div>
				<div className="hygieneimg ">
					<img className="desktopview" src={KithcenKingimg} />
					<img className="mobileview" src={hygieneMobile} alt="" />
				</div>
				<div className="hygiene-Heading ">
					<h1>Dust Guards</h1>
				</div>
				<div className="hygiene-content desktopview">
					<p>
						Our skilled cleaners uphold the highest standards of
						hygiene and precision, leaving no tile unpolished and no
						fixture untouched. With an unwavering commitment to
						excellence, we ensure restoring your restroom to
						pristine luxury.
					</p>
				</div>

				<div className="hygiene-content-m mobileview">
					Our skilled cleaners uphold the highest standards of hygiene
					and precision, leaving no tile unpolished and no fixture
					untouched. With an unwavering commitment to excellence, we
					ensure restoring your restroom to pristine luxury.
					<p></p>
				</div>
				<div className="connect-button hygiene-button">BOOK NOW</div>
			</div>
			<div className="hygiene-bottom">
				<div className="hygiene-lower-background">
					<img className="desktopview" src={hygieneBorder} />
				</div>
				<div className="hygieneFeatures">
					<img className="desktopview" src={HomyFeatures} alt="" />
					<img src={HomyFeaturesMobile} className="mobileview" />
				</div>
				<div className="hygieneOptions"></div>

				<div className="hygiene-cards">
					<div className="hygiene-card">
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
					<div className="hygiene-card">
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
					<div className="hygiene-card">
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

export default hygiene;
