import React from "react";
import {Menu} from 'antd';
import {
    DashboardIcon,
    ClassIcon,
    ReportIcon,
    ExamIcon,
    ChatIcon,
} from "../componenets/icons";
import SubMenu from "antd/es/menu/SubMenu";
import {Link} from "react-router-dom";

class SidebarItems extends React.Component {
    state = {
        collapsed: false,
        mode: 'inline',
        theme: 'light',
    };

    render() {
        return (
            <Menu
                mode={this.state.mode}
                theme={this.state.theme}
                defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<DashboardIcon/>}>
                    <span>داشبورد</span>
                </Menu.Item>
                <Menu.Item key="2" icon={<ClassIcon/>}>
                    <span>کلاس ها</span>
                </Menu.Item>
                <Menu.Item key="3" icon={<ReportIcon/>}>
                    <span>گزارش ها</span>
                </Menu.Item>
                <SubMenu key="sub1" title="آزمون ها" icon={<ExamIcon/>}>
                    <Link to="teacher/exams">
                        <Menu.Item key="4">
                            <span>کارنامه آزمون</span>
                        </Menu.Item>
                    </Link>
                    <Menu.Item key="5">
                        <span>آزمون آنلاین</span>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="6" icon={<ChatIcon/>}>
                    <span>گفت و گو</span>
                </Menu.Item>
            </Menu>
        );
    }
}

export default SidebarItems;