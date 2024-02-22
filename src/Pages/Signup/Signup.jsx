import React, { useState, useEffect } from "react";
import mobileview from "../../assets/mobileview.svg";
import { Link } from "react-router-dom";
import desktopview from "../../assets/ourservicesbackground.svg";
import aboutimg from "../../assets/feature.jpg";
import "./Signup.css";
// import { text } from "stream/consumers"; 

const Signup = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		password: "",
		password2: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	useEffect(() => {
		const handleSubmit = async () => {
			if (isSubmitting) {
				try {
					const response = await fetch(
						"http://3.27.122.168/api/user/register/",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify(formData),
						}
					);

					if (response.ok) {
						console.log(formData);
						console.log("Signup Successful");
						const data = await response.json();
						const token = data.token;
						console.log("token", token);
						// Extract token from response

						localStorage.setItem(
							"userData",
							JSON.stringify(formData)
						);
						localStorage.setItem("accessToken", data.access);
						localStorage.setItem("refreshToken", data.refresh);

						// Log tokens from local storage
						console.log(
							"Access Token:",
							localStorage.getItem("accessToken")
						);
						console.log(
							"Refresh Token:",
							localStorage.getItem("refreshToken")
						);

						window.location.href = "/";
						setFormData({
							name: "",
							email: "",
							phone: "",
							address: "",
							password: "",
							password2: "",
						});
					} else {
						console.log("Signup failed");
					}
				} catch (error) {
					console.error("Error occurred:", error);
				} finally {
					setIsSubmitting(false);
				}
			}
		};

		handleSubmit();
	}, [isSubmitting, formData]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
	};

	return (
		<div className="signup">
			<div
				className="wapper"
				style={{ display: "flex", flexDirection: "column" }}
			>
				<div className="signup-headline">CREATE YOUR ACCOUNT</div>
				<img src={mobileview} alt="" className="mobileview" />
				<img src={desktopview} alt="" className="desktopview" />
			</div>
			<div className="signup-cards">
				<div className="signup-img">
					<img src={aboutimg} alt="" className="aboutusimg" />
				</div>
				<div className="signup-form">
					<form>
						<div>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Name"
								required
							/>
						</div>
						<div>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								placeholder="Email"
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<input
								type="number"
								id="phone"
								name="phone"
								value={formData.phone}
								placeholder="Phone Number"
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<input
								type="text"
								id="address"
								name="address"
								value={formData.address}
								placeholder="Street, City, State, Country, Pincode"
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<input
								type="password"
								id="password"
								name="password"
								value={formData.password}
								placeholder="Password"
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<input
								type="password"
								id="password2"
								name="password2"
								value={formData.password2}
								placeholder="Confirm Password"
								onChange={handleChange}
								required
							/>
						</div>
						<div className="Signup-link" style={{marginTop:'-1rem'}}>
							<p>
								Already have an account?
								<Link to="/login" className="Signup">
									{" "}
									Login
								</Link>
							</p>
						</div>

						<Link to="/login">
							<button
								className="submit-btn"
								type="submit"
								disabled={isSubmitting}
								onClick={handleSubmit}
							>
								{isSubmitting ? "Submitting..." : "Submit"}
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
