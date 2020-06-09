import React from 'react';
import * as actions from '../store/actions/auth';
import {Button} from 'antd';
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux';

class IndexLayout extends React.Component {
    componentDidMount() {
        console.log(this.props.isAuthenticated)
    }

    render() {
        return (
            <div>
                {
                    this.props.isAuthenticated ?
                        <Button type="primary" htmlType="button" danger onClick={this.props.logout}>
                            خروج
                        </Button>
                        :
                        <Link to="/login">
                            <Button type="primary" htmlType="button">
                                ورود
                            </Button>
                        </Link>
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
};
export default withRouter(connect(null, mapDispatchToProps)(IndexLayout));