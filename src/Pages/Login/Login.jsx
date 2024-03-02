import React, { useState, useEffect } from 'react';
import mobileview from '../../assets/mobileview.svg';
import desktopview from '../../assets/ourservicesbackground.svg';
import aboutimg from '../../assets/feature.jpg';
import { Link } from 'react-router-dom';
import { FaPhone, FaGoogle } from "react-icons/fa";
import "./Login.css";
import {jwtDecode} from 'jwt-decode';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [isLoggedIn,setIsLoggedIn]=useState(false);

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
                    const response = await fetch('http://13.236.85.77/api/user/login/', {
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
                        // console.log('Access Token:', token.access);
                        // console.log('Refresh Token:', token.refresh);
                        await fetchProfileData(token.access);
                       
                        setFormData({
                            email: '',
                            password: ''
                        });

                      
                        // Redirect the user to the desired page after login
                        // window.location.href = '/dashboard';
                    }
                    else if (response.status === 404) {
                        // User might not exist or there is a validation error
                        const errorData = await response.json();
                        console.log('errordata')
                        if (errorData.errors && errorData.errors.non_field_errors) {
                            toast.error(errorData.errors.non_field_errors[0]);
                        } else if (errorData.errors && errorData.errors.email) {
                            toast.error(errorData.errors.email[0]);
                        } else {
                            toast.error('Login failed. Please check your credentials');
                        }
                    }
                    else {
                        console.log('Login failed');
                        toast.error('Login Failed');
                    }
                } catch (error) {
                    console.error('Error occurred:', error);
                    toast.error('An error occurred');
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



    const fetchProfileData = async (accessToken) => {
        try {
            const profileResponse = await fetch('http://13.236.85.77/api/user/profile/', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
    
            if (profileResponse.ok) {
                const userData = await profileResponse.json();
                console.log('User Data:', userData);
                localStorage.setItem('userData', JSON.stringify(userData));
                // Process user data as needed
                localStorage.setItem('loginSuccess', 'true');
                localStorage.setItem('loginStatus','true')
                window.location.href = '/';
            } else {
                console.log('Failed to fetch profile data');
            }
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
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
 