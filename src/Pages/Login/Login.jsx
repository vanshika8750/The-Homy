import React, { useState, useEffect } from 'react';
import mobileview from '../../assets/mobileview.svg';
import desktopview from '../../assets/ourservicesbackground.svg';
import aboutimg from '../../assets/feature.jpg';
import { Link } from 'react-router-dom';
import { FaPhone, FaGoogle } from "react-icons/fa";
import "./Login.css";
import {jwtDecode} from 'jwt-decode';


const Login = () => {


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        if (isSubmitting) {
            const loginUser = async () => {
                try {
                    const response = await fetch('http://3.27.122.168/api/user/login/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    });
    
                    if (response.ok) {
                        console.log('Login successful');
                        const data = await response.json();
                        console.log(data);
    
                        // Extract the token from the response data
                        const { token } = data;
    
                        // Now you can use the token as needed
                        console.log('Access Token:', token.access);
                        console.log('Refresh Token:', token.refresh);
    
                       
                        setFormData({
                            email: '',
                            password: ''
                        });
                        decodeToken(token.access);
                        // Redirect the user to the desired page after login
                        // window.location.href = '/dashboard';
                    } else {
                        console.log('Login failed');
                    }
                } catch (error) {
                    console.error('Error occurred:', error);
                } finally {
                    setIsSubmitting(false);
                }
            };
    
            loginUser();
        }
    }, [isSubmitting, formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    };

    const decodeToken = (accessToken) => {
        const decoded = jwtDecode(accessToken);
        console.log('Decoded Token:', decoded);
        console.log(JSON.stringify(decoded.user_id))
//         console.log(decoded.email)
//         const decodedHeader = jwtDecode(accessToken, { header: true });
// console.log(decodedHeader);
    };


    return (
        <div className="login">
       
            <div className="wapper" style={{ display: "flex", flexDirection: "column" }}>
                <div className="login-headline">LOGIN</div>
                <img src={mobileview} alt="" className='mobileview' />
                <img src={desktopview} alt="" className='desktopview' />
            </div>
            <div className="login-cards">
                <img src={aboutimg} alt="" className='aboutusimg' />
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="Signup-link">
                            <p>Didn't have an account ? <Link to="/signup" className='Signup'>Sign up</Link></p>
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
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="Forgot-password">
                            <Link to="/forgotPassword" className='Forgot-password'>Forgot Password</Link>
                        </div>
                        <button className='submit-btn' type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Logging in....' : 'Login'}
                        </button>
                        <p className='login-other-option-line'>or login in with</p>
                        <div className="other-options-login">
                            <div className="By-phone">
                                <Link className='By-phone-link'> <FaPhone /></Link>
                            </div>
                            <div className="By-google">
                                <Link className='By-google-link'> <FaGoogle /></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
 