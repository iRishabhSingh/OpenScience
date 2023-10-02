import { useState } from "react";
import "./AuthForm.css";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  const isEmailValid = (email) => {
    // Simple email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  const handleVerify = () => {
    // Logic to send OTP
    setShowOtpPopup(true);
  };

  const toggleOtpPopup = () => {
    setShowOtpPopup(!showOtpPopup);
  };

  const Login = () => (
    <div className="card-front">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Log In</h4>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                className="form-style"
                placeholder="Email"
                aria-label="Email"
              />
              <i className="input-icon uil uil-at"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                className="form-style"
                placeholder="Password"
                aria-label="Password"
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="btn mt-4">
              Login
            </button>
          </form>
          <p className="mb-0 mt-4 text-center">
            <a href="#" className="link">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  const Signup = () => (
    <div className="card-back">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-3 pb-3">Sign Up</h4>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="text"
                className="form-style"
                placeholder="Full Name"
                aria-label="Full Name"
              />
              <i className="input-icon uil uil-user"></i>
            </div>
            <div className="form-group mt-2 flex gap-2 items-center">
              <input
                type="email"
                className="form-style"
                placeholder="Email"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="input-icon uil uil-at"></i>
              <button
                type="button"
                className="btn"
                onClick={handleVerify}
                disabled={!isEmailValid(email)}
              >
                Verify
              </button>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                className="form-style"
                placeholder="Password"
                aria-label="Password"
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                className="form-style"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="btn mt-4">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="section flex justify-center">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span>Log In </span>
                <span>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <Login />
                  <Signup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showOtpPopup && (
        <div className="otp-popup">
          <form className="otp-content">
            <h3>Enter OTP</h3>
            <div className="form-group mt-2">
              <input
                type="text"
                className="form-style"
                placeholder="Enter OTP"
                aria-label="OTP"
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <div>
              <button type="submit">Submit OTP</button>
              <button type="button" onClick={toggleOtpPopup}>
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
