import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/index.jsx";
import Card from "./pages/Card";
import Dashboard from "./pages/Dashboard/Index";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import AuthForm from "./pages/AuthForm/AuthForm";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Listing from "./pages/Listing";
import Profile from "./pages/Profile";
import Projects from "./pages/Project/Projects";
import Views from "./pages/Dashboard/View";
import AdminPage from "./pages/AdminPage";
import About_us from "./pages/Aboutus/About_us";
function App() {
  return (
    <div className="text-black font-[ Source Serif Pro]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<AuthForm />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/select-role" element={<Card />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/create-feed" element={<Views />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/aboutus" element={<About_us />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
