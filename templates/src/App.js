import React from "react";
import './App.css';
import 'antd/dist/antd.css';
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Login from "./containers/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/Login'><Login/></Route>
      </Router>
    </div>
  );
}

export default App;
