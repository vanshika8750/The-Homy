import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import mobileview from "../../assets/mobileview.svg";
import { Link } from "react-router-dom";
import desktopview from "../../assets/ourservicesbackground.svg";
import aboutimg from "../../assets/feature.jpg";
import "./Signup.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import signupimg from '../../assets/signup.png'

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
            "https://thehomy.co/api/user/register/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            }
          );

          if (response.ok) {
            // console.log(formData);
            // console.log("Signup Successful");


            const data = await response.json();
            const token = data.token.access;
            // console.log("token", token);
            // Extract token from response
            await fetchProfileData(token);

            setFormData({
              name: "",
              email: "",
              phone: "",
              address: "",
              password: "",
              password2: "",
            });

            // Set a flag in localStorage to indicate successful signup
            localStorage.setItem("signupSuccess", "true");
            
            localStorage.setItem('loginStatus','true')
            const signupSuccess = localStorage.getItem("signupSuccess");
    // console.log(
  //  '  signupscuccess', signupSuccess
  //   )

            // Redirect to the home page
            window.location.href = "/";
        
          } 
          else if (response.status === 400) {
            // User might already exist or there is a validation error
            const errorData = await response.json();
            if (errorData.errors && errorData.errors.email) {
              toast.error(errorData.errors.email[0]);
            } else {
              toast.error("Signup failed. Please check your details");
            }
          }
          else {
            // console.log("Signup failed");
            toast.error('Signup Failed');
          }
        } catch (error) {
          // console.error("Error occurred:", error);
          toast.error('An error occurred');
        } finally {
          setIsSubmitting(false);
        }
      }
    };

    handleSubmit();
  }, [isSubmitting, formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate password length
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }
  
    // Validate password match
    if (formData.password !== formData.password2) {
      toast.error("Passwords do not match");
      return;
    }
  
    // Validate phone number length
    if (formData.phone.length < 10|| formData.phone.length>10) {
      toast.error("Please enter a phone number of 10 digits");
      return;
    }
  
    // If all validations pass, proceed with form submission
    setIsSubmitting(true);
  };
  
  

  const fetchProfileData = async (accessToken) => {
    try {
      const profileResponse = await fetch(
        "https://thehomy.co/api/user/profile/",
        {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${accessToken}`,
          },
        }
      );

      if (profileResponse.ok) {
        const userData = await profileResponse.json();
        // console.log("User Data:", userData);
        localStorage.setItem("userData", JSON.stringify(userData));
        
        localStorage.setItem('loginStatus','true')
        // Process user data as needed
      } else {
        // console.log("Failed to fetch profile data");
      }
    } catch (error) {
      // console.error("Error fetching profile data:", error);
    }
  };


  const [showPassword, setShowPassword] = useState(false);
 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showConfPassword, setShowConfPassword] = useState(false);
 
  const toggleConfPasswordVisibility = () => {
    setShowConfPassword(!showConfPassword);
  };

  return (
    <div className="signup content-below-navbar">
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
          <img src={signupimg} alt="" className="aboutusimg" />
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
                type="tel"
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
               type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <button type="button" 
              className="eye"
              onClick={togglePasswordVisibility}
              >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
            </div>
            <div>
              <input
               type={showConfPassword ? 'text' : 'password'}
                id="password2"
                name="password2"
                value={formData.password2}
                placeholder="Confirm Password"
                onChange={handleChange}
                required
              />
               <button className="eye" type="button" 
              onClick={toggleConfPasswordVisibility}
              >
          {showConfPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
            </div>
            <div className="Signup-link" style={{ marginTop: "-1rem" }}>
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
                className="submit-btn submit-signup"
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
