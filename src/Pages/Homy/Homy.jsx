import React, { useEffect ,useState} from "react";
import KitchenKingbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import KitchenKingBorder from "../../assets/KitchenKingBorder.svg";
import "./Homy.css";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import KitchenKingBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
import KitchenKingMobile from "../../assets/KitchenKingMobile.png";
import { Link } from "react-router-dom";
import KitchenKingBordermid from "../../assets/KitchenKingBordermid.svg";
import KitchenKingbgmid from "../../assets/KitchenKingbgmid.svg";
import { IoStarOutline } from "react-icons/io5";


const Homy = () => {
	const [dataFetched, setDataFetched] = useState(false);
	const [subscriptionPlans, setSubscriptionPlans] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://13.236.85.77/api/subcriptionplan/");
                if (response.ok) {
                    const res = await response.json();
                    const data = res.data;
                    setSubscriptionPlans(data); // Set fetched data in state
					setDataFetched(true);
				} else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error occurred while fetching data:", error);
            }
        };

        fetchData();
    }, []);

	// console.log(subscriptionPlans[0].planoptions)
	 // Render loading message if data is not fetched yet
	 if (!dataFetched) {
        return <div>Loading...</div>;
    }

	return (
		<div className="KitchenKing-homy">
			<div className="KitchenKing-homy-top">
				<div className="KitchenKing-homy-upper-background">
					<img className="desktopviewh " src={KitchenKingbg} />
					<img
						className="mobileview"
						src={KitchenKingBorderMobile}
						alt=""
					/>
					<img className="midviewkkh" src={KitchenKingbgmid} alt="" />
				</div>
				<div className="KitchenKing-homyimg">
					<img className="desktopviewh midviewkkh" src={KithcenKingimg} />
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
					<img className="desktopviewh" src={KitchenKingBorder} />
					<img className="midviewkkh" src={KitchenKingBordermid} />
				</div>
				<div className="KitchenKing-homy-price">
				<div className="KitchenKing-homypromax-table">
						<div className="pricecard">
						{subscriptionPlans[0].planoptions}
							<br />
							<span className="red">
							{subscriptionPlans[0].prices}
							</span>
						</div>
						<div className="pricecard">
							{subscriptionPlans[1].planoptions}
							<br />
							<span className="red">
							{subscriptionPlans[1].prices}
							</span>
						</div>
						<div className="pricecard">
						{subscriptionPlans[1].planoptions}
							<br />
							<span className="red">
							{subscriptionPlans[1].prices}
							</span>
						</div>
						<div className="pricecard">
						{subscriptionPlans[1].planoptions}
							<br />
							<span className="red">
							{subscriptionPlans[1].prices}
							</span>
						</div>
						<div className="pricecard">
						{subscriptionPlans[1].planoptions}
							<br />
							<span className="red">
							{subscriptionPlans[1].prices}
							</span>
						</div>
					</div>
					<div className="connect-button book-now-btnh">BOOK NOW</div>
					<h3 className="checkout-plansh">
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
