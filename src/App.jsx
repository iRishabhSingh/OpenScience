import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import HomePage from "./pages/HomePage/index.jsx";
import Dashboard from "./pages/Dashboard/Index";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
