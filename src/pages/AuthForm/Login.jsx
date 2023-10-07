import { NavLink } from "react-router-dom";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8989/api/v1/auth/login", {
        email,
        password,
      })
      .then((res) => {
        alert(res.data.message);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card-front">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Log In</h4>
          <div className="form-group">
            <input
              type="email"
              className="form-style"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              className="form-style"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
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
};

export default Login;
