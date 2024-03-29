import React, { useEffect ,useState}  from "react";
import KitchenKingbg from "../../assets/KitchenKingbg.svg";
import KithcenKingimg from "../../assets/hygieneimg.png";
import KitchenKingBorder from "../../assets/KitchenKingBorder.svg";
import "./HomyProMax.css";
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCrownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import KitchenKingBorderMobile from "../../assets/KitchenKingBorderMobile.svg";
import KitchenKingMobile from "../../assets/hygieneimgmobile.png";
import KitchenKingBordermid from "../../assets/KitchenKingBordermid.svg";
import KitchenKingbgmid from "../../assets/KitchenKingbgmid.svg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loadinggif from '../../assets/loadinggif.gif'
import { MdCurrencyRupee } from "react-icons/md";

const HygieneHomypromax = () => {

	const [dataFetched, setDataFetched] = useState(false);
	const [subscriptionPlans, setSubscriptionPlans] = useState([]);
	const [selectedPlan, setSelectedPlan] = useState(null);
	const user_id = localStorage.userData ? JSON.parse(localStorage.userData).id : null;
	useEffect(() => {
		// Check if the loginSuccess flag is set in localStorage
		const loginSuccess = localStorage.getItem('loginStatus');
	//   console.log(loginSuccess)
		// Check if loginSuccess is true
		if (loginSuccess == 'true') {
		}
		else{
			toast.error('Please login');
			window.location.href='/login'
		}
	  }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://thehomy.co/api/subcriptionplan/");
                if (response.ok) {
                    const res = await response.json();
                    const data = res.data;
                    const filteredPlans = data.filter(plan => plan.id >= 41 && plan.id <= 45);
					setSubscriptionPlans(filteredPlans); // Set fetched data in state
					setDataFetched(true);
				} else {
                    // console.error("Failed to fetch data");
                }
            } catch (error) {
                // console.error("Error occurred while fetching data:", error);
            }
        };

        fetchData();
    }, []);

	 if (!dataFetched) {
        return <div className="content-below-navbar"
		style={{textAlign:'center',width:'100vw'}}
		>
		  <img src={loadinggif} alt="" />
		  </div>;
    }

	const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

   const handleBookNow = () => {
		if (selectedPlan) {
			localStorage.setItem('selectedPlan', JSON.stringify(selectedPlan));
			const mappedPlan = {
				user: user_id,
				order_service: selectedPlan.services,
				order_planoption: selectedPlan.planoptions,
				order_plan: selectedPlan.plans,
				order_price: selectedPlan.prices,
			  };

			
            fetch('https://thehomy.co/api/createorder/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mappedPlan),
            })
            .then(response => response.json())
            .then(data => {
                // console.log('Selected plan data posted successfully:', data);
			window.location.href = '/customizePro';
            })
            .catch((error) => {
                // console.error('Error posting selected plan data:', error);
            });

        } else {
            // console.log("Please select a plan before booking.");
        }
    };

	return (
		<div className="KitchenKing-homypromax content-below-navbar">
			<div className="KitchenKing-homypromax-top">
				<div className="KitchenKing-homypromax-upper-background">
					<img className="desktopviewh" src={KitchenKingbg} />
					<img
						className="mobileview"
						src={KitchenKingBorderMobile}
						alt=""
					/>
					<img className="midviewkkh" src={KitchenKingbgmid} alt="" />
				</div>
				<div className="KitchenKing-homypromaximg">
					<img className="desktopviewh" src={KithcenKingimg} />
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
					Our skilled cleaners uphold the highest standards of hygiene
					and precision, leaving no tile unpolished and no fixture
					untouched. With an unwavering commitment to excellence, we
					ensure restoring your restroom to pristine luxury.
					</p>
					<div className="KitchenKing-homypromax-features">
						<p style={{ color: "red" }}>Mr. Hygiene</p>
						<h3>Choose the plan that’s right for you </h3>
						<ul>
						<li>
							Well trained staff: 2 cleaner + 1 supervisor

							</li>
							<li>Verified for hygiene
</li>
							<li className="">
							Vaccinated for safety

							</li>
							<li className="">
							Equipped with toilet cleaner kit

							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="KitchenKing-homypromax-bottom">
				<div className="KitchenKing-homypromax-lower-background">
					<img className="desktopviewh" src={KitchenKingBorder} />
					<img className="midviewkkh" src={KitchenKingBordermid} />
				</div>
				<div className="KitchenKing-homypromax-price">

<div className="KitchenKing-homypromax-table">
                      
                        {subscriptionPlans.map((plan, index) => (
                            <div
                                key={index}
                                className={`pricecard ${selectedPlan === plan ? "selected" : ""}`}
                                onClick={() => handleSelectPlan(plan)}
                            >
                                {plan.planoptions}
                                <br />
                                <span className=""><MdCurrencyRupee/>{plan.prices}</span>
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

				<div className="KitchenKing-homypromax-cards">
					<div className="KitchenKing-homypromax-card">
						<h2>
							{" "}
							<IoDiamondOutline /> HOMY
						</h2>
						<ul>
						<li>Well trained cleaner</li>
						<li>Professional & experienced
</li>
							<li>Vaccinated for safety</li>
							<li className="middle">Verified for hygiene </li>
							<li className="middle">Equipped with toilet cleaner kit
</li>
						</ul>
						<Link to="/hygiene/homy">
							<div className="connect-button book-btn">
								BOOK NOW
							</div>
						</Link>
					</div>
					<div className="KitchenKing-homypromax-card">
						<h2>
							{" "}
							<LiaCrownSolid /> HOMY PRO
						</h2>
						<ul>
						<li>Well trained staff: 1 cleaner + 1 supervisor </li>
							<li>Verified for hygiene
</li>
							<li>Vaccinated for safety
</li>
							<li className="middle">
							Equipped with toilet cleaner kit

							</li>
						</ul>{" "}
						<Link to="/hygiene/homypro">
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

export default HygieneHomypromax;
