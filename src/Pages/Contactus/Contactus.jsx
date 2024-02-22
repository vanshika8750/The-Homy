import React, { useState, useEffect } from 'react';
import mobileview from '../../assets/mobileview.svg';
import desktopview from '../../assets/ourservicesbackground.svg';
import aboutimg from '../../assets/feature.jpg';
import './Contactus.css';

const Contactus = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        const submitForm = async () => {
            if (isSubmitting) {
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
                        console.log('Contact us successful');
                        setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            message: ''
                        });
                    } else {
                        console.log('Contact us failed');
                    }
                } catch (error) {
                    console.error('Error occurred:', error);
                } finally {
                    setIsSubmitting(false);
                }
            }
        };

        submitForm();
    }, [isSubmitting, formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    };

    return (
        <div className="contactus">
            <div className="wapper" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="contactus-headline">Contact Us</div>
                <img src={mobileview} alt="" className="mobileview" />
                <img src={desktopview} alt="" className="desktopview" />
            </div>
            <div className="contactus-cards">
                <img src={aboutimg} alt="" className="aboutusimg" />
                <div className="contactus-form">
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
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                placeholder="Phone number"
                                onChange={handleChange}
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
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                placeholder="Message"
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button className="submit-btn" type="submit" disabled={isSubmitting} onClick={handleSubmit}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contactus;
