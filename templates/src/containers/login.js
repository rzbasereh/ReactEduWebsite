import React from "react";
import '../App.css';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import Row from "antd/es/descriptions/Row";
import Col from "antd/es/grid/col";

const {Header, Content, Footer} = Layout;

const Login = (props) => {
    return (
        <Layout className="layout">
            <Header>

            </Header>
            <Content style={{padding: '0 50px'}}>

                <div className="site-layout-content">Content
                    <Row>
                        <Col span={12}>col-12</Col>
                        <Col span={12}>col-12</Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};
export default Login;