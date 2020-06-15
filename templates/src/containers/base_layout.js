import React, {Component} from "react";
import 'antd/dist/antd.css';
import '../App.css';
import {Layout, Menu, Avatar, Row, Col, Button, Popover, Badge} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {
    OpenSidebarIcon,
    EnvelopeIcon,
    BellIcon,
    ChevronDownIcon, DashboardIcon, ClassIcon, ReportIcon, ExamIcon, ChatIcon
} from "../componenets/icons";
import Icon from "@ant-design/icons";
import Search from "antd/es/input/Search";
import Link from "antd/lib/typography/Link";
import SidebarItems from "../componenets/sider-menu"
import SubMenu from "antd/es/menu/SubMenu";
import {connect} from "react-redux";

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
    state = {
        collapsed: false,
        mode: 'inline',
        theme: 'light',
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} theme={"light"}>
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
                                        <Badge status="processing"/>
                                    </Button>
                                </Popover>
                                <Popover content={MassageContent} title='پیام ها' trigger="click">
                                    <Button>
                                        <EnvelopeIcon/>
                                        <Badge status="processing"/>
                                    </Button>
                                </Popover>
                            </Col>
                        </Row>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            minHeight: 280,
                        }}>
                    </Content>
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