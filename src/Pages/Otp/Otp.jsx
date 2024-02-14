import React, { useState, useEffect, useRef } from "react";
import "./Otp.css";
import otpbgdesk from "../../assets/otpbgdesk.svg";
import otpimg from "../../assets/otpimg.svg";
import otpmobile from "../../assets/otpmobile.svg";

const Otp = () => {
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const otpInputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpInputChange = (index, value, event) => {
    if (/\d/.test(value) || value === "") {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = value;
      setOtpDigits(newOtpDigits);

      if (value !== "" && index < otpDigits.length - 1) {
        otpInputRefs.current[index + 1].focus();
      }

      // Handle backspace key press
      if (value === "" && event.key === "Backspace" && index > 0) {
        otpInputRefs.current[index - 1].focus();
      }
    }
  };

  const handleResendOtp = () => {
    setTimer(60); // Reset the timer to 60 seconds
  };

  return (
    <div className="otp-page">
      <div className="img-bg">
        <img src={otpbgdesk} alt="" className="otp-desktop" />
        <img src={otpmobile} alt="" className="otp-mobile" />
      </div>

      <div className="content-div-otp">
        <div className="left-otp">
          <img src={otpimg} alt="" className="otpimg" />
        </div>

        <div className="right-otp">
          <div className="head-otp">
            <div className="verihead">OTP</div>
            <div >VERIFICATION</div>
          </div>

          <div className="content-otp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            esse labore sit ea maxime illum, quibusdam amet, libero itaque,
            autem sed modi totam odio beatae reiciendis aliquam facere nam
            similique!
          </div>

          <div className="otp-veri-div">
            <div className="enter-otp">
              Please enter the 6-digit code sent on
            </div>
            <div>+91*********7</div>
            <div className="fillotp">
              {otpDigits.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpInputChange(index, e.target.value, e)}
                  onKeyDown={(e) => handleOtpInputChange(index, digit, e)}
                  ref={(ref) => (otpInputRefs.current[index] = ref)}
                />
              ))}
            </div>
            <div className="reset-div">
              {timer > 0 ? (
                <div>Resend OTP in {timer} seconds</div>
              ) : (
                <div>
                  <button className="btn-resend-otp" onClick={handleResendOtp}>
                    Resend OTP
                  </button>
                </div>
              )}
            </div>
            <button className="btn-otp-login">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
