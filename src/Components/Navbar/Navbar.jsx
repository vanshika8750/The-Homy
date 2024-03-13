import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Offcanvas, Container, Form } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import homelogo from "../../assets/home-logo.svg";
import profile from "../../assets/profile.svg";
import { GoArrowUpRight } from "react-icons/go";
import "./Navbar.css";

function OffcanvasExample() {
    const [userData, setUserData] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
const [navColor,setnavColor]=useState(false);
    useEffect(() => {
        const storedUserData = localStorage.getItem("userData");
        if (storedUserData) {
            try {
                const userDataJSON = JSON.parse(storedUserData);
                setUserData(userDataJSON);
                setAuthenticated(true);
            } catch (error) {
                // console.error("Error parsing userData JSON:", error);
            }
        }
    }, []);

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
		handleCloseNavbar();
    };

    const handleCloseNavbar = () => {
        setShowNavbar(false);
    };

    const handleToggleNavbar = () => {
        setShowNavbar(prevState => !prevState);
    };

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 200) {
                setnavColor(true);
            } else {
                setnavColor(false);
            }
        };
    
        window.addEventListener('scroll', changeBackground);
    
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <>
            {["xxl"].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className={navColor?'bg-custom fixed-top-navbar nav-active-color':'bg-custom fixed-top-navbar'} 
                    // data-bs-theme="dark"
                    // sticky="top"
                >
                    <Container fluid>
                       

                    <div className="logo1">
                            <img src={logo} alt="Thehomy" />
                        </div>

                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            onClick={handleToggleNavbar}
                            className="nav-toggle-fn"
                        />

                        <Navbar.Offcanvas
                            show={showNavbar}
                            onHide={handleCloseNavbar}
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton />
                            <Offcanvas.Body>
                                <Nav className="mob-nav ">
                                    <Navbar.Brand to="#" className="logo">
                                        <Link to='/'><img src={logo} alt="Thehomy" /></Link>
                                    </Navbar.Brand>

                                    <div className="hamburger-links-outer">
                                        <div className="hamburger-links-inner">
                                            <Link
                                                to="/"
                                                className="connect-btn1"
                                                onClick={handleCloseNavbar}
                                            >
                                                Home
                                            </Link>
                                            <Link
                                                to="/aboutus"
                                                className="connect-btn1"
                                                onClick={handleCloseNavbar}
                                            >
                                                About Us
                                            </Link>
                                            <Link
                                                to="/services"
                                                className="connect-btn1"
                                                onClick={handleCloseNavbar}
                                            >
                                                Services
                                            </Link>
                                            <Link
                                                to="/contactus"
                                                className="connect-btn1"
                                                onClick={handleCloseNavbar}
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
                                                    <div className="d-flex connect-button justify-content-center align-items-center">
                                                        <Link
                                                            to="/signup"
                                                            className="connect-btn"
                                                            onClick={handleCloseNavbar} 
                                                        >
                                                            Sign up
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
                        <div className="navbar-link-container">
                        <Link
                                to="/"
                                className="navbar-link-buttons1"
                                onClick={handleCloseNavbar}
                            >
                                Home
                            </Link>
                            <Link
                                to="/services"
                                className="navbar-link-buttons2"
                                onClick={handleCloseNavbar}
                            >
                                Services
                            </Link>
                            <Link
                                to="/aboutus"
                                className="navbar-link-buttons2"
                                onClick={handleCloseNavbar}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/contactus"
                                className="navbar-link-buttons3"
                                onClick={handleCloseNavbar}
                            >
                                Contact Us
                            </Link>
                        </div>
                        <div className="connect-btn-control">
                            {/* <Link to="/">
                                <div className="home-logo-nav">
                                    <img src={homelogo} alt="" />
                                </div>
                            </Link> */}

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
                                    <div className="d-flex connect-button justify-content-center align-items-center square">
                                        <Link to="/signup" className="connect-btn ">
                                            Sign up
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
