import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/index.jsx";
import Card from "./pages/Card";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/selectrole" element={<Card />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
