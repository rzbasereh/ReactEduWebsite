import React from "react";
import 'antd/dist/antd.css';
import '../App.css';
import {Layout, Menu, Dropdown, Button} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';


const {Header, Sider, Content} = Layout;
const {SubMenu} = Menu;

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
                                   icon={<svg className="bi bi-columns-gap" width="1em" height="1em" viewBox="0 0 16 16"
                                              fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                       <path fillRule="evenodd"
                                             d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
                                   </svg>}>
                            <span>داشبورد</span>
                        </Menu.Item>
                        <Menu.Item key="2"
                                   icon={<svg className="bi bi-display" width="1em" height="1em" viewBox="0 0 16 16"
                                              fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                           d="M5.75 13.5c.167-.333.25-.833.25-1.5h4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75z"/>
                                       <path fillRule="evenodd"
                                             d="M13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                                   </svg>}>
                            <span>کلاس ها</span>
                        </Menu.Item>
                        <Menu.Item key="3"
                                   icon={<svg className="bi bi-calendar" width="1em" height="1em" viewBox="0 0 16 16"
                                              fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                       <path fillRule="evenodd"
                                             d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"/>
                                       <path fillRule="evenodd"
                                             d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"/>
                                   </svg>}>
                            <span>گزارش ها</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title="آزمون ها"
                                 icon={<svg className="bi bi-check-square" width="1em"
                                            height="1em" viewBox="0 0 16 16"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                     <path fillRule="evenodd"
                                           d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                     <path fillRule="evenodd"
                                           d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
                                 </svg>}>
                            <Menu.Item key="4"><span>کارنامه آزمون</span>
                            </Menu.Item>
                            <Menu.Item key="5"> <span>آزمون آنلاین</span>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6"
                                   icon={<svg className="bi bi-chat-square" width="1em" height="1em"
                                              viewBox="0 0 16 16" fill="currentColor"
                                              xmlns="http://www.w3.org/2000/svg">
                                       <path fillRule="evenodd"
                                             d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                   </svg>}>
                            <span>گفت و گو</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
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