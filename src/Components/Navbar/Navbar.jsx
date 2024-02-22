import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/logo.svg';
import homelogo from '../../assets/home-logo.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { GoArrowUpRight } from 'react-icons/go';

function OffcanvasExample() {
  const [userData, setUserData] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      try {
        const userDataJSON = JSON.parse(storedUserData);
        setUserData(userDataJSON);
        setAuthenticated(true);
      } catch (error) {
        console.error('Error parsing userData JSON:', error);
      }
    }
  }, []);


  const handleLogout = () => {
    localStorage.clear();
    setUserData(null);
    setAuthenticated(false);
  };

  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-custom "
          data-bs-theme="dark"
          sticky="top"
        >
          <Container fluid>
            <div className="navbar-link-container">
              <Link to="/aboutus" className="navbar-link-buttons1">
                About Us
              </Link>
              <Link to="/services" className="navbar-link-buttons2">
                Services
              </Link>
              <Link to="/contactus" className="navbar-link-buttons3">
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
                      <Link to="/" className="connect-btn1">
                        Home
                      </Link>
                      <Link to="/aboutus" className="connect-btn1">
                        About Us
                      </Link>
                      <Link to="/services" className="connect-btn1">
                        Services
                      </Link>
                      <Link to="/contactus" className="connect-btn1">
                        Contact Us
                      </Link>

                      <Form className="d-flex connect-button justify-content-center align-items-center">
                        {authenticated ? (
                          <div onClick={handleLogout} className="connect-btn">
                            Logout
                          </div>
                        ) : (
                          <Link to="/signup" className="connect-btn">
                            Connect
                            <GoArrowUpRight />
                          </Link>
                        )}
                      </Form>
                    </div>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className="connect-btn-control">
              {authenticated && (
                <Link to="/dashboard" className="navbar-link-buttons4">
                  Profile
                </Link>
              )}
              <Link to="/">
                <div className="home-logo-nav">
                  <img src={homelogo} alt="" />
                </div>
              </Link>
			  <Form className="d-flex connect-button justify-content-center align-items-center">
                        {authenticated ? (
                          <div onClick={handleLogout} className="connect-btn">
                            Logout
                          </div>
                        ) : (
                          <Link to="/signup" className="connect-btn">
                            Connect
                            <GoArrowUpRight />
                          </Link>
                        )}
                      </Form>            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
