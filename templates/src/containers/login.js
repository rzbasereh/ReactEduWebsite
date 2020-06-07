import React from "react";
import '../App.css';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";

const {Header, Content, Footer} = Layout;

const Login = (props) => {
    return (
        <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
        </Row>
    );
};
export default Login;