const Signup = () => {
  return (
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
              name="name"
            />
            <i className="input-icon uil uil-user"></i>
          </div>
          <div className="form-group mt-2 flex gap-2 items-center">
            <input
              type="email"
              className="form-style"
              placeholder="Email"
              aria-label="Email"
              name="email"
            />
            <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              className="form-style"
              placeholder="Password"
              aria-label="Password"
              name="password"
            />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              className="form-style"
              placeholder="Confirm Password"
              aria-label="Confirm Password"
              name="confirm-password"
            />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <button type="submit" className="btn mt-4">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
