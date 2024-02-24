import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logo.svg";
import homelogo from "../../assets/home-logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import profile from '../../assets/profile.svg'
import { GoArrowUpRight } from "react-icons/go";

function OffcanvasExample() {
	const [userData, setUserData] = useState(null);
	const [authenticated, setAuthenticated] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

	useEffect(() => {
		const storedUserData = localStorage.getItem("userData");

		console.log('storedUserData:',storedUserData)
		if (storedUserData) {
			try {
				const userDataJSON = JSON.parse(storedUserData);
				console.log('userdatajson',userDataJSON)
				setUserData(userDataJSON);
				setAuthenticated(true);
			} catch (error) {
				console.error("Error parsing userData JSON:", error);
			}
		}
	}, []);
console.log('userdata',userData);
const handleLogout = () => {
    localStorage.clear(); 
    setUserData(null); 
    setAuthenticated(false); 
    localStorage.setItem('logoutSuccess', true);
    window.location.href = "/";
	setDropdownVisible(false);
};

const toggleDropdown = () => {
	setDropdownVisible(prevState => !prevState);
};

const handleDashboardClick = () => {
    setDropdownVisible(false);
};

	return (
		<>
			{["xxl"].map((expand) => (
				<Navbar
					key={expand}
					expand={expand}
					className="bg-custom "
					data-bs-theme="dark"
					sticky="top"
				>
					<Container fluid>
						<div className="navbar-link-container">
							<Link
								to="/aboutus"
								className="navbar-link-buttons1"
							>
								About Us
							</Link>
							<Link
								to="/services"
								className="navbar-link-buttons2"
							>
								Services
							</Link>
							<Link
								to="/contactus"
								className="navbar-link-buttons3"
							>
								Contact Us
							</Link>
						</div>

						<div className="logo1">
							<img src={logo} alt="Thehomy" />
						</div>

						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
						/>

						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								></Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-center flex-grow-1 pe-1">
									<Navbar.Brand to="#" className="logo">
										<img src={logo} alt="Thehomy" />
									</Navbar.Brand>

									<div className="hamburger-links-outer">
										<div className="hamburger-links-inner">
											<Link
												to="/"
												className="connect-btn1"
											>
												Home
											</Link>
											<Link
												to="/aboutus"
												className="connect-btn1"
											>
												About Us
											</Link>
											<Link
												to="/services"
												className="connect-btn1"
											>
												Services
											</Link>
											<Link
												to="/contactus"
												className="connect-btn1"
											>
												Contact Us
											</Link>

											<Form>
												{authenticated ? (
													 <div className="phone-nav">
													 <Link className="dash-link-phone" to="/dashboard" onClick={handleDashboardClick}>Dashboard</Link>
															 <span className="logout-nav-phone" onClick={handleLogout}>Log Out</span>
														
													 </div>
													
												) : (
													<div  className="d-flex connect-button justify-content-center align-items-center">

													<Link
														to="/signup"
														className="connect-btn"
													>
														Connect
														<GoArrowUpRight />
													</Link>
													</div>
												)}
											</Form>
										</div>
									</div>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>

						<div className="connect-btn-control">
							
							<Link to="/">
								<div className="home-logo-nav">
									<img src={homelogo} alt="" />
								</div>
							</Link>

							{/* {authenticated && (
            <div className="profile-dropdown">
                <img className="square home-logo-nav" src={profile} alt="Profile" onClick={toggleDropdown} />
                {dropdownVisible && (
                    <div className="dropdown-content">
                        <Link className="dash-link" to="/dashboard" onClick={handleDashboardClick}>Dashboard</Link>
                        <span className="line-nav"></span>
                        <span className="logout-nav" onClick={handleLogout}>Log Out</span>
                    </div>
                )}
            </div>
        )} */}

							<Form>
								{authenticated ? (
									 <div className="profile-dropdown">
									 <img className="square home-logo-nav" src={profile} alt="Profile" onClick={toggleDropdown} />
									 {dropdownVisible && (
										 <div className="dropdown-content">
											 <Link className="dash-link" to="/dashboard" onClick={handleDashboardClick}>Dashboard</Link>
											 <span className="line-nav"></span>
											 <span className="logout-nav" onClick={handleLogout}>Log Out</span>
										 </div>
									 )}
								 </div>
								) : (
									<div  className="d-flex connect-button justify-content-center align-items-center square">

									<Link to="/signup" className="connect-btn ">
										Connect
										<GoArrowUpRight />
									</Link>
									</div>
								)}
							</Form>{" "}
						</div>
					</Container>
				</Navbar>
			))}
		</>
	);
}

export default OffcanvasExample;
