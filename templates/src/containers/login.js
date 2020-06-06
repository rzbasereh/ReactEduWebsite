import React from 'react';
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "waiting..."
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/")
            .then(res => {
                this.setState({
                    user: res.data.user
                });
                console.log(res.data);
            });
    }

    render() {
        return (
            <div>
                {this.state.user}
            </div>
        );
    }
}

export default Login;