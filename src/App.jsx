import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Signup from "./pages/Signup/Signup";
<<<<<<< HEAD
import HomePage from "./pages/HomePage/index.jsx";
=======
import Card from "./pages/Card";

function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/selectrole" component={Card}/>
      </Switch>
    </Router>
  )
};
    
import HomePage from "./pages/HomePage.jsx";
>>>>>>> fabdd2f2c6e69c31fb36e7c2fc86bee57af8bf41
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
