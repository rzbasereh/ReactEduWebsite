import React from "react";
import 'antd/dist/antd.css';
import '../App.css';
import LoginImg from "../img/login-image.svg"
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import {Card} from 'antd';
import {Form, Input, Button, Checkbox} from 'antd';
import {Link, withRouter} from "react-router-dom";
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';

const emailRegex = /^\S+@\S+\.\S+$/;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                email: "",
                password: "",
            },
            emailStatus: "",
        }
    }

    handleEmail = e => {
        this.setState({
            emailStatus: "validating"
        });
        if (e.target.value === "") {
            this.setState({
                emailStatus: "error"
            });
        } else if (emailRegex.test(e.target.value)) {
            let data = {
                email: e.target.value
            };
            let self = this;
            axios.post("http://127.0.0.1:8000/api/login/check/", data)
                .then(function (response) {
                    if (response.data.exists) {
                        self.setState({
                            emailStatus: "success"
                        });
                        console.log("success");
                    } else {
                        self.setState({
                            emailStatus: "error"
                        });
                        console.log("error");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            this.setState({
                emailStatus: "error"
            });
        }
    };

    onFinish = values => {
        // console.log('Received values of form: ', values);
        this.props.onAuth(values.email, values.password);
        // let data = {
        //     "username": "",
        //     "password": ""
        // };
        // const headers = {
        //     'Content-Type': 'application/json',
        // };
        // axios.post("http://127.0.0.1:8000/token-auth/", JSON.stringify(data), {headers: headers})
        //     .then(function (response) {
        //         console.log(response.data)
        //         // if (response.data.exists) {
        //         //
        //         //     console.log("success");
        //         // } else {
        //         //     self.setState({
        //         //         emailStatus: "error"
        //         //     });
        //         // }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    };

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        return (
            <Card className="login-card">
                {
                    this.props.isAuthenticated ?
                        this.props.history.push("/" + this.props.user)
                        :
                        ""
                }
                <Row>
                    <Col span={12}>
                        <img src={LoginImg} alt="Login"/>
                    </Col>
                    <Col span={12}>
                        <h1>خوش آمدید</h1>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{remember: true}}
                            onFinish={this.onFinish}>
                            <Form.Item
                                name="email"
                                onChange={this.handleEmail}
                                hasFeedback
                                validateStatus={this.state.emailStatus}
                                rules={[{required: true, message: 'لطفا رایانامه ی خود را وارد کنید !'}]}>
                                <Input prefix={
                                    <svg className="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16"
                                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 0 0 .014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 0 0 .022.004zm9.974.056v-.002.002zM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    </svg>
                                }
                                       placeholder="رایانامه"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{required: true, message: 'لطفا رمز عبور را وارد کنید !'}]}>
                                <Input
                                    prefix={
                                        <svg className="bi bi-lock" width="1em" height="1em" viewBox="0 0 16 16"
                                             fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                                        </svg>
                                    }
                                    type="password"
                                    placeholder="رمز عبور"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>به خاطر بسپار</Checkbox>
                                </Form.Item>

                                <Link className="login-form-forgot" to="/RecoverPassword">
                                    فراموشی رمز عبور
                                </Link>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                        loading={!!this.props.loading}>
                                    ورود
                                </Button>
                                {errorMessage}
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Card>
        )
            ;
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.token !== null,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => {
            dispatch(actions.authLogin(email, password));
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));