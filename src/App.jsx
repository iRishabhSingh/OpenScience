import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Card from "./pages/Card";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/selectrole" component={Card}/>
      </Switch>
    </Router>
    <Card/>
    </>
  );
}

export default App;
