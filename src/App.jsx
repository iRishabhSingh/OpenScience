import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Signup from "./pages/Signup/Signup";
import HomePage from "./pages/HomePage.jsx";
import Dashboard from "./pages/Dashboard/Index";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import AuthForm from "./pages/AuthForm/AuthForm";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<AuthForm />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
