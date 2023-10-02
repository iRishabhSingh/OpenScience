import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/index.jsx";
import Card from "./pages/Card";
import Dashboard from "./pages/Dashboard/Index";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import AuthForm from "./pages/AuthForm/AuthForm";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthForm />} />
<<<<<<< HEAD
        <Route path="/reset-password" element={<ResetPassword />} />
=======
>>>>>>> 1018f4513bfc90c35d0fa053c74658b894f105de
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/selectrole" element={<Card />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
