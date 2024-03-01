import React,{useEffect,useState} from "react";
import KitchenKingbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/KitchenKing.png";
import KitchenKingBorder from "../../assets/KitchenKingBorder.svg";
import "./Homypro.css";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { IoStarOutline } from "react-icons/io5";
import KitchenKingBordermid from "../../assets/KitchenKingBordermid.svg";
import KitchenKingbgmid from "../../assets/KitchenKingbgmid.svg";
import KitchenKingBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
import KitchenKingMobile from "../../assets/KitchenKingMobile.png";
import { Link } from "react-router-dom";

const HygieneHomypro = () => {

	const [dataFetched, setDataFetched] = useState(false);
	const [subscriptionPlans, setSubscriptionPlans] = useState([]);
	const [selectedPlan, setSelectedPlan] = useState(null);
	const user_id=JSON.parse(localStorage.userData).id

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://13.236.85.77/api/subcriptionplan/");
                if (response.ok) {
                    const res = await response.json();
                    const data = res.data;
                    const filteredPlans = data.filter(plan => plan.id >= 36 && plan.id <= 40);
					setSubscriptionPlans(filteredPlans);
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

	 if (!dataFetched) {
        return <div>Loading...</div>;
    }

	const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    const handleBookNow = () => {
		if (selectedPlan) {
			localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
			const mappedPlan = {
				user:user_id,
				order_service:selectedPlan.id,
				order_planoption:selectedPlan.id,
				order_plan:selectedPlan.id,
				order_price:selectedPlan.id
			};

            fetch('http://13.236.85.77/api/createorder/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mappedPlan),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Selected plan data posted successfully:', data);
			window.location.href = '/customize';
            })
            .catch((error) => {
                console.error('Error posting selected plan data:', error);
            });

        } else {
            console.log("Please select a plan before booking.");
        }
    };

	return (
		<div className="KitchenKing-homypro">
			<div className="KitchenKing-homypro-top">
				<div className="KitchenKing-homypro-upper-background">
					<img className="desktopviewh" src={KitchenKingbg} />
					<img
						className="mobileview"
						src={KitchenKingBorderMobile}
						alt=""
					/>
					<img className="midviewkkh" src={KitchenKingbgmid} alt="" />
				</div>
				<div className="KitchenKing-homyproimg">
					<img className="desktopviewh midviewkkh" src={KithcenKingimg} />
					<img
						className="mobileview"
						src={KitchenKingMobile}
						alt=""
					/>
				</div>
				<div className="KitchenKing-homypro-Heading">
					<h1>HOMY PRO</h1>
				</div>
				<div className="KitchenKing-homypro-content">
					<p>
					Our chefs are trained and experienced in curating
						exquisite meals tailored to your preferences. Whether
						it's a five-course gourmet experience or your favorite
						comfort food, with a keen eye for detail, focus on
						nutrition and calorie count, our chefs ensure you get
						the most delicious food on the table that doesn't
						compromise your health!
					</p>
					<div className="KitchenKing-homypro-features">
						<p style={{ color: "red" }}>Kitchen King</p>
						<h3>Choose the plan that’s right for you </h3>
						<ul>
							<li>Versatile culinary expert </li>
							<li>Skilled in crafting diverse dishes. </li>
							<li>lPossesses a professional degree</li>
							<li>Equipped with kitchen kits</li>
							<li>Vaccinated for safety</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="KitchenKing-homypro-bottom">
				<div className="KitchenKing-homypro-lower-background">
					<img className="desktopviewh" src={KitchenKingBorder} />
					<img className="midviewkkh" src={KitchenKingBordermid} />
				</div>
				<div className="KitchenKing-homypro-price">
<div className="KitchenKing-homypromax-table">
                      
                        {subscriptionPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`pricecard ${selectedPlan === plan ? "selected" : ""}`}
                                onClick={() => handleSelectPlan(plan)}
                            >
                                {plan.planoptions}
                                <br />
                                <span className="red">{plan.prices}</span>
                            </div>
                        ))}
                    </div>
                    <div
                        className="connect-button book-now-btnh"
                        onClick={handleBookNow}
                        style={{ cursor: "pointer", marginTop: "20px" }}
                    >
                        BOOK NOW
                    </div>


					<h3 className="checkout-plansh">
						Check our other beneficial plans{" "}
					</h3>
				</div>

				<div className="KitchenKing-homypro-cards">
				<div className="KitchenKing-homypro-card">
						<h2>
							{" "}
							<IoDiamondOutline /> HOMY
						</h2>
						<ul>
							<li>
								Access to all premium nutrition & workout plans
							</li>
							<li>5-star professional chef at home</li>
							<li className='middle'>Customizable gourmet meals</li>
							<li className="middle">Get dietician once a month</li>
						</ul>
						<Link to="/dustguard/homy">
							<div className="connect-button book-btn">
								BOOK NOW
							</div>
						</Link>
					</div>
					<div className="KitchenKing-homypro-card">
						<h2>
							{" "}
							<IoDiamondOutline /> HOMY PRO MAX
						</h2>
						<ul>
							<li>
								Access to all premium nutrition & workout plans
							</li>
							<li>5-star professional chef at home</li>
							<li className="middle">Customizable gourmet meals</li>
							<li className="middle">Get dietician once a month</li>
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

export default HygieneHomypro;
