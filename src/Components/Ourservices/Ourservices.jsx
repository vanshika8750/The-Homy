import React from "react";
import img from "../../assets/ourservicesbackground.svg";
import "./ourservices.css";
import card from "../../assets/servicescard.svg";
import { Link } from "react-router-dom";

const Ourservices = () => {
	return (
		<div className="ourservices deskview">
			<div
				className="wapper"
				style={{ display: "flex", flexDirection: "column" }}
			>
				<div className="services-headline">Our Services</div>

				<img src={img} alt="" />
			</div>

			<div className="ourservices-cards">
				<Link to="/KitchenKing">
					<div className="cardo">
						<img src={card} alt="" />

						<p>
							Kitchen king <br />{" "}
							<span className="ourservices-span"style={{textDecoration:'none'}}>Cooks</span>{" "}
						</p>
					</div>
				</Link>{" "}
				<Link to="/KitchenKing">
					<div className="cardo">
						<img src={card} alt="" />

						<p>
							Mr. Hygiene <br />{" "}
							<span className="ourservices-span"style={{textDecoration:'none'}}>
								Toilet Cleaner
							</span>{" "}
						</p>
					</div>
				</Link>{" "}
				<Link to="/KitchenKing">
					<div className="cardo">
						<img src={card} alt="" />

						<p>
							Dust Gards <br />{" "}
							<span className="ourservices-span"style={{textDecoration:'none'}}>
								House cleaner
							</span>{" "}
						</p>
					</div>
				</Link>{" "}
				<Link to="/KitchenKing">
					<div className="cardo">
						<img src={card} alt="" />

						<p>
							{" "}
							Our Valuable <br />{" "}
							<span className="ourservices-span"style={{textDecoration:'none'}}>
								Combos
							</span>{" "}
						</p>
					</div>
				</Link>{" "}
			</div>
		</div>
	);
};

export default Ourservices;
