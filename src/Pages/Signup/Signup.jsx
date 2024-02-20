import React, { useState, useEffect } from 'react';
import mobileview from '../../assets/mobileview.svg';
import { Link } from 'react-router-dom';
import desktopview from '../../assets/ourservicesbackground.svg';
import aboutimg from '../../assets/feature.jpg';
import './Signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmpassword: ''
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
                        'https://projects.skymetweather.com/wnddevauth/fieldUserLogin',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        }
                    );

                    if (response.ok) {
                        console.log(formData)
                        console.log('Signup Successful');

                        setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            address: '',
                            password: '',
                            confirmpassword: ''
                        });
                    } else {
                        console.log('Signup failed');
                    }
                } catch (error) {
                    console.error('Error occurred:', error);
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
            <div className="wapper" style={{ display: 'flex', flexDirection: 'column' }}>
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
                                placeholder="9999999999"
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
                                id="confirmpassword"
                                name="confirmpassword"
                                value={formData.confirmpassword}
                                placeholder="Confirm Password"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Link to="/login">
                            <button className="submit-btn" type="submit" disabled={isSubmitting} onClick={handleSubmit}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
