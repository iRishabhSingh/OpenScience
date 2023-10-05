import {React, useState } from "react";
import "./AuthForm.css";
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom";
const AuthForm = () => {
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  // const navigate = useNavigate();
  const handleChange = (e) => {
    const {name,value} = e.target
    setUser({
      ...user,
      [name] : value
    })
  }
  const isEmailValid = ((emailid) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailid);
  });

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8989/api/v1/auth/login",user)
    .then((res)=>{
      alert(res.data.message);
    })
    .catch((error)=>{
      alert("Error in Login!")
      console.log(error);
    })
  };

  const handleSignup = async() => {
    e.preventDefault();
    // Handle signup logic here
    axios.post("http://localhost:8989/api/v1/auth/register",user)
    .then((res)=>{
      alert(res.data.message);
    })
    .catch((error)=>{
      alert("Error in Registration!")
      console.log(error)
    })
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
            <div className="form-group">
              <input
                type="email"
                className="form-style"
                placeholder="Email"
                name = "email"
                value={user.email}
                onChange={handleChange}
              />
              <i className="input-icon uil uil-at"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                className="form-style"
                placeholder="Password"
                name = "password"
                value = {user.password}
                onChange={handleChange}
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="btn mt-4" onClick={handleLogin}>
              Login
            </button>
          <p className="mb-0 mt-4 text-center">
            <NavLink to="/reset-password" className="link">
              Forgot your password?
            </NavLink>
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
            <div className="form-group">
              <input
                type="text"
                className="form-style"
                placeholder="Full Name"
                aria-label="Full Name"
                name = "name"
                value = {user.name}
                onChange = {handleChange}
              />
              <i className="input-icon uil uil-user"></i>
            </div>
            <div className="form-group mt-2 flex gap-2 items-center">
              <input
                type="email"
                className="form-style"
                placeholder="Email"
                aria-label="Email"
                name = "email"
                value={user.email}
                onChange={handleChange}

              />
              <i className="input-icon uil uil-at"></i>
              <button
                type="button"
                className="btn"
                onClick={handleVerify}
                // disabled={!isEmailValid(emailid)}
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
                name = "password"
                value={user.password}
                onChange={handleChange}
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                className="form-style"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                name = "confirmpassword"
                value={user.confirmpassword}
                onChange={handleChange}
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="btn mt-4" onClick={handleSignup}>
              Register
            </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
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
    </>
  );
};

export default AuthForm;
