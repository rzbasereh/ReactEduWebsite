import React, {Component} from "react";
import 'antd/dist/antd.css';
import '../App.css';
import {Layout, Menu, Dropdown, Avatar, Row, Col, Button, Popover, Badge} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {
    DashboardSvg,
    ClassSvg,
    ReportSvg,
    ExamSvg,
    ChatSvg,
    OpenSidebarSvg,
    EnvelopeSvg,
    BellSvg,
    ChevronDownSvg
} from "../componenets/icons";
import Icon from "@ant-design/icons";
import Search from "antd/es/input/Search";
import Link from "antd/lib/typography/Link";

// page-layout
const {Header, Sider, Content} = Layout;

// submenu
const {SubMenu} = Menu;

// icons
const DashboardIcon = props => <Icon component={DashboardSvg} {...props} />;
const ClassIcon = props => <Icon component={ClassSvg} {...props} />;
const ReportIcon = props => <Icon component={ReportSvg} {...props} />;
const ExamIcon = props => <Icon component={ExamSvg} {...props} />;
const ChatIcon = props => <Icon component={ChatSvg} {...props} />;
const OpenSidebarIcon = props => <Icon component={OpenSidebarSvg} {...props} />;
const EnvelopeIcon = props => <Icon component={EnvelopeSvg} {...props} />;
const BellIcon = props => <Icon component={BellSvg} {...props} />;
const ChevronDownIcon = props => <Icon component={ChevronDownSvg} {...props} />;

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

// const Notification =() => (
//     <span className='notification-indicator notification-indicator-primary notification-indicator-ripple'>
//     </span>
// );
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
                    <div className="logo"/>
                    <Menu
                        mode={this.state.mode}
                        theme={this.state.theme}
                        defaultSelectedKeys={['1']}
                    >
                        <Menu.Item key="1"
                                   icon={<DashboardIcon/>}>

                            <span>داشبورد</span>
                        </Menu.Item>
                        <Menu.Item key="2"
                                   icon={<ClassIcon/>}>
                            <span>کلاس ها</span>
                        </Menu.Item>
                        <Menu.Item key="3"
                                   icon={<ReportIcon/>}>
                            <span>گزارش ها</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title="آزمون ها"
                                 icon={<ExamIcon/>}>
                            <Menu.Item key="4"><span>کارنامه آزمون</span>
                            </Menu.Item>
                            <Menu.Item key="5"> <span>آزمون آنلاین</span>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6"
                                   icon={<ChatIcon/>}>
                            <span>گفت و گو</span>
                        </Menu.Item>
                    </Menu>
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
                                <Popover content={EventContent}  title='رویداد ها' trigger="click" placement="bottomRight">
                                    <Button className='bell'><BellIcon/></Button>
                                </Popover>
                                <Popover content={MassageContent} title='پیام ها' trigger="click" placement="bottomRight">
                                    <Button><EnvelopeIcon />
                                    <Badge status="processing" />
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
                        }}
                    >
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default BaseLayout;