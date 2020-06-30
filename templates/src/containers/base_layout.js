import React, {Component} from "react";
import 'antd/dist/antd.css';
import '../App.css';
import {Layout, Avatar, Row, Col, Button, Popover, Badge} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {
    OpenSidebarIcon,
    EnvelopeIcon,
    BellIcon,
    ChevronDownIcon
} from "../componenets/icons";
import Search from "antd/es/input/Search";
import Link from "antd/lib/typography/Link";
import SidebarItems from "../componenets/sider-menu";
import AllQuestionPageMenuItems from "./exam-menu";
import {Route} from "react-router-dom";
import Exam from "./exam";
import EditExam from "./edit-exam";
import {connect} from "react-redux";
import ManageExam from "./manage-exam";

const {Header, Sider, Content} = Layout;


const UserContent = (
    <div>
        <Link>خروج</Link>
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
        }else {
            this.state = {
            collapsed: false,
            mode: 'inline',
            theme: 'light',
        };
        }
    }

    // click on sidebar items
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

    // toggle sidebar when click on menu icon
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    // make sidebar open in edit page (khodam drawerd !!!!!!!!!!!)
    componentWillReceiveProps() {
        if (window.location.pathname === '/teacher/exam/edit_exam') {
            this.setState({
                collapsed: false,
            })
        }
    }

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
                                    <Button>
                                        {this.props.full_name}
                                        <ChevronDownIcon/>
                                    </Button>
                                </Popover>
                                <Avatar icon={<UserOutlined/>}/>
                                <Popover content={EventContent} title='رویداد ها' trigger="click">
                                    <Button className='bell'>
                                        <BellIcon/>
                                        <Badge status="processing" className={this.props.has_notification ? '' : 'no-event'}/>
                                    </Button>
                                </Popover>
                                <Popover content={MassageContent} title='پیام ها' trigger="click">
                                    <Button>
                                        <EnvelopeIcon/>
                                        <Badge status="processing" className={this.props.has_message ? '' : 'no-event'}/>
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
                    <Route exact path="/teacher/exam">
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
                    <Route path="/teacher/exam/edit_exam">
                        <Content
                            onClick={this.closeSider}
                            className="site-layout-background"
                            style={{
                                minHeight: 280,
                            }}>
                            <Row className="edit-page">
                                <EditExam/>
                            </Row>
                        </Content>
                    </Route>
                    <Route path="/teacher/manage_exam">
                        <Content
                            className="site-layout-background"
                            style={{
                                minHeight: 280,
                            }}>
                            <Row className='manage-exam'>
                                <ManageExam/>
                            </Row>
                        </Content>
                    </Route>
                </Layout>
            </Layout>
        );
    }

}


const mapStateToProps = state => {
    return {
        full_name: state.main.full_name,
        has_message: state.main.has_message,
        has_notification: state.main.has_notification,
    }
};

export default connect(mapStateToProps)(BaseLayout);