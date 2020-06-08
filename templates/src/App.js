import React from "react";
import 'antd/dist/antd.css';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import {connect} from "react-redux"
import Login from "./containers/login";
import * as actions from './store/actions/auth';
import RecoverPassword from "./containers/RecoverPassword";


function App() {
    return (
        <div>
            <Router>
                <Route path='/login' {...this.props}><Login/></Route>
                <Route path='/RecoverPassword'><RecoverPassword/></Route>
            </Router>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
};
export default connect(mapStateToProps)(App);

