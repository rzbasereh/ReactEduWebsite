import React from "react";
import 'antd/dist/antd.css';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import {connect} from "react-redux";
import Login from "./containers/login";
import * as actions from './store/actions/auth';
import RecoverPassword from "./containers/RecoverPassword";
import IndexLayout from "./containers/index_layout";
import Base_layout from "./containers/base_layout"
import Teacher from "./containers/teacher";
import SidebarItems from "./componenets/sider-menu";


class App extends React.Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
    }


    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/'>
                        <IndexLayout {...this.props}/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/RecoverPassword'>
                        <RecoverPassword/>
                    </Route>
                    <Route path='/base_layout'>
                        <Base_layout/>
                    </Route>
                    <Route path='/teacher' >

                        <SidebarItems/>
                    </Route>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);