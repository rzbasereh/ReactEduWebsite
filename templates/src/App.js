import React from "react";
import 'antd/dist/antd.css';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import {connect} from "react-redux";
import Login from "./containers/login";
import * as actions from './store/actions';
import RecoverPassword from "./containers/RecoverPassword";
import IndexLayout from "./containers/index_layout";
import BaseLayout from "./containers/base_layout"


class App extends React.Component {
    componentDidMount() {
        this.props.onTryAutoSignup();
        this.props.collectCommonData();
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
                    <Route path='/teacher' component={BaseLayout}>
                    </Route>

                    <Route path='/base_layout'>
                        <BaseLayout/>
                    </Route>
                    {
                        this.props.user === "teacher" ?
                            <Route path='/teacher'>
                                <BaseLayout/>
                                {/*<SidebarItems/>*/}
                            </Route>
                            :
                            ""
                        // TODO: Forbidden Access Page
                    }
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        user: state.auth.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
        collectCommonData: () => dispatch(actions.collectCommonData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);