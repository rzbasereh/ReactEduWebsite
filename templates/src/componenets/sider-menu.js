import React from "react";
import {Menu, Button} from 'antd';
import {
    DashboardIcon,
    ClassIcon,
    ReportIcon,
    ExamIcon,
    ChatIcon,
    PlusIcon,
    UserIcon,
    MenuIcon
} from "../componenets/icons";
import SubMenu from "antd/es/menu/SubMenu";
import {Link} from "react-router-dom";
import {connect} from "react-redux"

class SidebarItems extends React.Component {

    constructor() {
        super();
        this.state = {
            mode: 'inline',
            theme: 'light',
            defaultSelectedKeys: ['1'],
        };
        if (window.location.pathname === "/teacher/exam") {
            this.state = {
                defaultSelectedKeys: ['4'],
                mode: 'inline',
                theme: 'light',
            }
        }
    }

    //  getKey = ({key}) => {
    //     let itemKey = {key};
    //             // console.log(itemKey.key === "3");
    //      let path = window.location.pathname;
    //     // console.log(path)
    //      if (window.location.pathname === path) {
    //          this.setState({
    //              defaultSelectedKeys: [itemKey.key],
    //          })
    //      }
    // };

    render() {
        return (
            <Menu onClick={this.getKey}
                mode={this.state.mode}
                theme={this.state.theme}
                defaultSelectedKeys={this.state.defaultSelectedKeys}
            >

                <Menu.Item key="1" icon={<DashboardIcon/>}>
                    <Link to="/teacher/dashboard">
                        <span>داشبورد</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<ClassIcon/>}>
                    <Link to="/teacher/classes">
                        <span>کلاس ها</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ReportIcon/>}>
                    <Link to="/teacher/reports">
                        <span>گزارش ها</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<ExamIcon/>}>
                    <Link to="/teacher/exam">
                        <span>آزمون ها</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<ChatIcon/>}>
                    <Link to="/teacher/chats">
                        <span>گفت و گو</span>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default SidebarItems;