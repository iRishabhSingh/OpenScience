import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
