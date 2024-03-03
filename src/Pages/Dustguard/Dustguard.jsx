import React from "react";
import { Link } from "react-router-dom";
import "../KitchenKing/KitchenKing.css";
import DustGuardbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/dustguardimg.png";
import DustGuardBorder from "../../assets/KitchenKingBorder.svg";
import Pricing from "../../Components/Pricing/Pricing";
import HomyFeatures from "../../assets/HomyFeatures.png";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { IoStarOutline } from "react-icons/io5";
import HomyFeaturesMobile from "../../assets/HomyFeaturesMobile.png";
import DustGuardMobile from "../../assets/dustguardimgmobile.png";
import DustGuardBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
import DustGuardbgmid from "../../assets/KitchenKingbgmid.svg";
import DustGuardBordermid from "../../assets/KitchenKingBordermid.svg";

const DustGuard = () => {
	return (
		<div className="KitchenKing">
			<div className="KitchenKing-top">
				<div className="KitchenKing-upper-background">
					<img className="desktopviewkk" src={DustGuardbg} />
					<img
						className="mobileview"
						src={DustGuardBorderMobile}
						alt=""
					/>
					<img className="midviewkk" src={DustGuardbgmid} alt="" />
				</div>
				<div className="KitchenKingimg ">
					<img
						className="desktopviewkk midviewkk"
						src={KithcenKingimg}
					/>
					<img className="mobileview" src={DustGuardMobile} alt="" />
				</div>
				<div className="KitchenKing-Heading ">
					<h1>DUST GUARD</h1>
				</div>
				<div className="KitchenKing-content desktopviewkk midviewkk ">
					Dust cleaning services goodbye to untidy spaces and the
					headaches that come with them. Our team of professionals
					ensures your abode is spotless and cleaned with the best
					techniques and care. All of our staff is hygiene checked,
					vaccinated, responsible and trustworthy. So, it's time to
					relax and sit back, and let our experts make your home
					shine!
					<br />
					{/* <Link to="/customize">
						<div className="connect-button Dust-button">
							BOOK NOW
						</div>
					</Link> */}
				</div>

				<div className="KitchenKing-content-m mobileview">
					Dust cleaning services goodbye to untidy spaces and the
					headaches that come with them. Our team of professionals
					ensures your abode is spotless and cleaned with the best
					techniques and care. All of our staff is hygiene checked,
					vaccinated, responsible and trustworthy. So, it's time to
					relax and sit back, and let our experts make your home
					shine!
					{/* <Link to="/customize">
						<div className="connect-button Dust-button">
							BOOK NOW
						</div>
					</Link> */}
				</div>
			</div>
			<div className="KitchenKing-bottom">
				<div className="KitchenKing-lower-background">
					<img className="desktopviewkk" src={DustGuardBorder} />
					<img
						className="midviewkk"
						src={DustGuardBordermid}
						alt=""
					/>
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
							<li>Adaptable to all requirements</li>
							<li>Professional & experienced</li>
							<li>Verified for hygiene </li>
							<li>Equipped with cleaning kit</li>
						</ul>
						<Link to="/KitchenKing/homy">
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
						<li>Well trained staff: 1 cleaner + 1 supervisor</li>
						<li>Adaptable to all requirements</li>
						<li>Equipped with cleaning kit</li>
						<li>Professional & experienced</li>
						<li>Vaccinated for safety</li>
						</ul>{" "}
						<Link to="/dustguard/homypro">
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
						<li>Adaptable to all requirements</li>
						<li>Equipped with cleaning kit</li>
						<li>Professional & experienced</li>
						<li>Vaccinated for safety</li>
						</ul>
						<Link to="/dustguard/homypromax">
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

export default DustGuard;
