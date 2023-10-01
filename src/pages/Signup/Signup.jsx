import { useState } from "react";
import google from "../../assets/google.svg";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  const isPasswordValid = () => {
    return password === confirmPassword && password.length >= 8;
  };

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleVerifyClick = () => {
    setShowOtpPopup(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isPasswordValid()) {
      console.log("Form submitted");
    } else {
      console.log("Passwords do not match or are less than 8 characters.");
    }
  };

  return (
    <div className="body-div min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="color-div bg-A8ECFA p-10 rounded-lg shadow-xl w-full md:w-2/3 lg:w-1/3"
      >
        <h1 className="text-2xl font-bold mb-10 text-center">Signup</h1>

        <div className="space-y-5">
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-1 font-semibold text-xs">
                First Name
              </label>
              <input
                type="text"
                className="w-full h-10 px-3 text-sm border rounded focus:outline-none focus:border-blue-500"
                placeholder="First name"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-semibold text-xs">
                Last Name
              </label>
              <input
                type="text"
                className="w-full h-10 px-3 text-sm border rounded focus:outline-none focus:border-blue-500"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <label className="block mb-1 font-semibold text-xs">Email</label>
              <input
                type="email"
                className="w-full h-10 px-3 text-sm border rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
              onClick={handleVerifyClick}
              disabled={!isEmailValid(email) || email === ""}
            >
              Verify
            </button>
          </div>
          {/* OTP Popup */}
          {showOtpPopup && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 w-96 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
                <input
                  name="otp"
                  type="text"
                  className="w-full h-10 px-3 text-sm border rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter OTP sent to your email"
                />
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
                    onClick={() => setShowOtpPopup(false)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
          <div>
            <label className="block mb-1 font-semibold text-xs">Password</label>
            <input
              type="password"
              className="w-full h-10 px-3 text-sm border rounded focus:outline-none focus:border-blue-500"
              placeholder="8 or more characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-xs">
              Confirm Password
            </label>
            <input
              type="password"
              className={`w-full h-10 px-3 text-sm border rounded focus:outline-none ${
                isPasswordValid()
                  ? "focus:border-blue-500"
                  : "focus:border-red-500"
              }`}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white h-10 rounded hover:bg-blue-700 focus:outline-none"
            >
              Signup
            </button>
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-400">
              ------------ OR ------------
            </span>
          </div>
          <div>
            <button
              type="button"
              className="w-full bg-white text-blue-600 h-10 rounded border border-blue-600 hover:bg-gray-50 focus:outline-none"
            >
              <span className="flex items-center justify-center space-x-2">
                <img src={google} alt="Google Logo" className="h-5 w-5" />
                <span>Signup with Google</span>
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
