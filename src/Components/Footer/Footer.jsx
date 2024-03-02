import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import ps from "../../assets/ps.png";
import "./Footer.css";
import logo from "../../assets/logo.svg";
export default function App() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState("");
  useEffect(() => {
    // Update the year in the footer copyright every year
    const interval = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 60000); // Check every minute (adjust the interval as needed)

    return () => {
      clearInterval(interval);
    };
  }, [currentYear]);

  const handleSubscription = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://13.236.85.77/api/subscribe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Subscribed to Newsletter.");
      } else {
        toast.error("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }

    setEmail("");
  };

  return (
    <div className="footer">
      <MDBFooter className="text-center" color="footer" bgColor="black">
        <div className="newsletter">
          <div style={{ fontSize: "25px" }}>Subscribe to Newsletter</div>
          <div>
            <form onSubmit={handleSubscription}>
              <input
                type="email"
                className="email-newsletter"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>

          <div className="download">
            <Link to="/maintenance">
              <img src={ps} alt="" />
            </Link>
          </div>
        </div>
        <MDBContainer className="p-4">
          <section className="footer-links">
            <MDBRow>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Company</h5>

                <ul className="list-unstyled mb-0">
                  <Link
                    to="/AboutUs"
                    style={{
                      textDecorationLine: "none",
                      color: "White",
                    }}
                  >
                    <li>About us</li>
                  </Link>

                  <Link
                    to="/Services"
                    style={{
                      textDecorationLine: "none",
                      color: "White",
                    }}
                  >
                    <li>Services</li>
                  </Link>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Our Services</h5>

                <ul className="list-unstyled mb-0">
                  <Link
                    to="/Services"
                    style={{
                      textDecorationLine: "none",
                      color: "White",
                    }}
                  >
                    <li>Chef</li>
                  </Link>

                  <Link
                    to="/Services"
                    style={{
                      textDecorationLine: "none",
                      color: "White",
                    }}
                  >
                    <li>Washroom Cleaners</li>
                  </Link>

                  <Link
                    to="/Services"
                    style={{
                      textDecorationLine: "none",
                      color: "White",
                    }}
                  >
                    <li>House Cleaners</li>
                  </Link>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Contact</h5>

                <ul className="list-unstyled mb-0">
                  <Link
                    to="https://mail.google.com/mail/u/2/#inbox"
                    style={{
                      textDecorationLine: "none",
                      color: "White",
                    }}
                  >
                    <li> info@thehomy.in</li>
                  </Link>
                </ul>
              </MDBCol>

              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Legal</h5>

                <ul className="list-unstyled mb-0">
                  <Link
                    to="/refundpolicy"
                    style={{
                      textDecorationLine: "none",
                      color: "White",
                    }}
                  >
                    <li>Refund Policy</li>
                  </Link>

                  <Link
                    to="/privacypolicy"
                    style={{
                      textDecorationLine: "none",
                      color: "White",
                    }}
                  >
                    <li>Privacy Policy</li>
                  </Link>

                  <Link
                    to="/termsandconditions"
                    style={{
                      textDecorationLine: "none",
                      color: "White",
                    }}
                  >
                    <li>Terms & Conditions</li>
                  </Link>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
          <div className="social">
            <Link
              to="https://www.facebook.com/people/Thehomy/61553486985244/ "
              target="_blank"
              style={{ color: "#FFF" }}
            >
              <MDBIcon fab icon="facebook" className="fb" size="lg" />
            </Link>

            <Link
              to="https://twitter.com/thehomy_in"
              target="_blank"
              style={{ color: "#FFF" }}
            >
              <MDBIcon fab icon="x-twitter" className="x" size="lg" />
            </Link>
            <Link
              to="https://instagram.com/thehomy.in?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              style={{ color: "#FFF" }}
            >
              <MDBIcon fab icon="instagram" className="ig" size="lg" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/thehomy-in/"
              target="_blank"
              style={{ color: "#FFF" }}
            >
              <MDBIcon fab icon="linkedin-in" className="li" size="lg" />
            </Link>
          </div>
        </MDBContainer>

        <Link
          className="text-center  text-white"
          to="https://thehomy.in/"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © {currentYear} TheHomy
        </Link>
      </MDBFooter>
    </div>
  );
}
