import React, { useState, useEffect } from 'react';
import mobileview from '../../assets/mobileview.svg';
import desktopview from '../../assets/ourservicesbackground.svg';
import aboutimg from '../../assets/feature.jpg';
import "./Login.css";
import { Link } from 'react-router-dom';
import { FaPhone, FaGoogle } from "react-icons/fa";

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
                    const response = await fetch('https://projects.skymetweather.com/wnddevauth/fieldUserLogin', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    });

                    if (response.ok) {
                        console.log(formData)
                        console.log('Login successful');
                        setFormData({
                            email: '',
                            password: ''
                        });
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
                            <p>Did't have an account ? <Link to="/signup" className='Signup'>Sign up</Link></p>
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
