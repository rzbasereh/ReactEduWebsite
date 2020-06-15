import React, {Component} from "react";
import 'antd/dist/antd.css';
import '../App.css';
import {Layout, Menu, Avatar, Row, Col, Button, Popover, Badge} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {
    OpenSidebarIcon,
    EnvelopeIcon,
    BellIcon,
    ChevronDownIcon
} from "../componenets/icons";
import Search from "antd/es/input/Search";
import Link from "antd/lib/typography/Link";
import {SidebarItems, AllQuestionPageMenuItems} from "../componenets/sider-menu";
import {Route} from "react-router-dom";
import Exam from "./exam";

const {Header, Sider, Content} = Layout;

const UserContent = (
    <div>
        <Link to=''>خروج</Link>
    </div>
);
const EventContent = (
    <div>

    </div>
);
const MassageContent = (
    <div>

    </div>
);

class BaseLayout extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
            theme: 'light',
        };
        if (window.location.pathname === "/teacher/exam") {
            this.state = {
                collapsed: true,
                mode: 'inline',
                theme: 'light',
            }
        }
    }


    closeSider = () => {
        if (window.location.pathname === "/teacher/exam") {
            this.setState({
                collapsed: true,
            });
        } else {
            this.setState({
                collapsed: false,
            })
        }
    };


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} theme={"light"}
                       onClick={this.closeSider}>
                    <SidebarItems/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        <Row>
                            <Col span={12}>
                                {React.createElement(this.state.collapsed ? OpenSidebarIcon : OpenSidebarIcon, {
                                    className: 'trigger',
                                    onClick: this.toggle,
                                })}
                                <Search placeholder="جستجو" onSearch={value => console.log(value)} enterButton/>
                            </Col>
                            <Col span={12}>
                                <Popover content={UserContent} trigger="hover" placement="bottomRight">
                                    <Button>نام کاربر
                                        <ChevronDownIcon/>
                                    </Button>
                                </Popover>
                                <Avatar icon={<UserOutlined/>}/>
                                <Popover content={EventContent} title='رویداد ها' trigger="click">
                                    <Button className='bell'><BellIcon/>
                                        <Badge status="processing"/>
                                    </Button>
                                </Popover>
                                <Popover content={MassageContent} title='پیام ها' trigger="click">
                                    <Button><EnvelopeIcon/>
                                        <Badge status="processing"/>
                                    </Button>
                                </Popover>
                            </Col>
                        </Row>
                    </Header>
                    <Route exact path="/teacher/dashboard">
                        <Content
                            className="site-layout-background"
                            style={{
                                minHeight: 280,
                            }}>
                        </Content>
                    </Route>
                    <Route path="/teacher/exam">
                        <Content
                            className="site-layout-background"
                            style={{
                                minHeight: 280,
                            }}>
                            <Row className="exam-page-row">
                                <Col>
                                    <AllQuestionPageMenuItems/>
                                </Col>
                                <Col>
                                    <Exam/>
                                </Col>
                            </Row>
                        </Content>
                    </Route>
                </Layout>
            </Layout>
        );
    }
}


export default BaseLayout;