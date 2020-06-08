import React from "react";
import 'antd/dist/antd.css';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from "./containers/login";
import RecoverPassword from "./containers/RecoverPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/login'><Login/></Route>
        <Route path='/RecoverPassword'><RecoverPassword/></Route>
      </Router>
    </div>
  );
}

export default App;
