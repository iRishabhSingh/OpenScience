import { NavLink } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card-front">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Log In</h4>
          <form action={handleSubmit} method="post">
            <div className="form-group">
              <input
                type="email"
                className="form-style"
                placeholder="Email"
                name="email"
              />
              <i className="input-icon uil uil-at"></i>
            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                className="form-style"
                placeholder="Password"
                name="password"
              />
              <i className="input-icon uil uil-lock-alt"></i>
            </div>
            <button type="submit" className="btn mt-4">
              Login
            </button>
          </form>
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
