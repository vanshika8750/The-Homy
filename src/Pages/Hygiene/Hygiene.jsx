import React from "react";
import { Link } from "react-router-dom";
import "../KitchenKing/KitchenKing.css";
import hygienebg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/hygieneimg.png";
import hygieneBorder from "../../assets/KitchenKingBorder.svg";
import Pricing from "../../Components/Pricing/Pricing";
import HomyFeatures from "../../assets/HomyFeatures.png";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { IoStarOutline } from "react-icons/io5";
import HomyFeaturesMobile from "../../assets/HomyFeaturesMobile.png";
import hygieneMobile from "../../assets/hygieneimgmobile.png";
import hygieneBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
import hygienebgmid from "../../assets/KitchenKingbgmid.svg";
import hygieneBordermid from "../../assets/KitchenKingBordermid.svg";

const hygiene = () => {
	return (
		<div className="KitchenKing content-below-navbar">
			<div className="KitchenKing-top">
				<div className="KitchenKing-upper-background">
					<img className="desktopviewkk" src={hygienebg} />
					<img
						className="mobileview"
						src={hygieneBorderMobile}
						alt=""
					/>
					<img className="midviewkk" src={hygienebgmid} alt="" />
				</div>
				<div className="KitchenKingimg">
					<img
						className="desktopviewkk midviewkk"
						src={KithcenKingimg}
					/>
					<img className="mobileview" src={hygieneMobile} alt="" />
				</div>
				<div className="KitchenKing-Heading ">
					<h1>MR. HYGIENE</h1>
				</div>
				<div className="KitchenKing-content desktopviewkk midviewkk ">
					Our skilled cleaners uphold the highest standards of hygiene
					and precision, leaving no tile unpolished and no fixture
					untouched. With an unwavering commitment to excellence, we
					ensure restoring your restroom to pristine luxury.
					<br />
					{/* <Link to="/customize">
						<div className="connect-button hygiene-button">
							BOOK NOW
						</div>
					</Link> */}
				</div>

				<div className="KitchenKing-content-m mobileview">
					Our skilled cleaners uphold the highest standards of hygiene
					and precision, leaving no tile unpolished and no fixture
					untouched. With an unwavering commitment to excellence, we
					ensure restoring your restroom to pristine luxury.
					{/* <Link to="/customize">
						<div className="connect-button hygiene-button">
							BOOK NOW
						</div>
					</Link> */}
				</div>
			</div>
			<div className="KitchenKing-bottom">
				<div className="KitchenKing-lower-background">
					<img className="desktopviewkk" src={hygieneBorder} />
					<img className="midviewkk" src={hygieneBordermid} alt="" />
				</div>
				<div className="KitchenFeatures">
					<img
						className="desktopviewkk midviewkk"
						src={HomyFeatures}
						alt=""
					/>
					<img src={HomyFeaturesMobile} className="mobileview" />
				</div>
				<div className="KitchenOptions"></div>

				<div className="KitchenKing-cards">
					<div className="KitchenKing-card">
						<h2>
							<IoStarOutline /> HOMY
						</h2>
						<ul>
							<li>Well trained cleaner</li>
							<li>Professional & experienced</li>
							<li>Verified for hygiene </li>
							<li>Vaccinated for safety</li>
							<li>Equipped with toilet cleaner kit</li>
						</ul>
						<Link to="/hygiene/homy">
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
							<li>
								Well trained staff: 1 cleaner + 1 supervisor
							</li>
							<li>Professional & experienced</li>
							<li>Verified for hygiene </li>
							{/* <li>Vaccinated for safety</li> */}
							<li>Equipped with toilet cleaner kit</li>
						</ul>{" "}
						<Link to="/hygiene/homypro">
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
							<li>Well trained staff: 2 cleaner + 1 supervisor</li>
							<li>Professional & experienced</li>
							<li>Verified for hygiene </li>
							{/* <li>Vaccinated for safety</li> */}
							<li>Equipped with toilet cleaner kit</li>
						</ul>
						<Link to="/hygiene/homypromax">
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

export default hygiene;
