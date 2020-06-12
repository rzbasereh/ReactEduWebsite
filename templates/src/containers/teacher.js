import React, {Component} from "react";
import 'antd/dist/antd.css';
import '../App.css';
import Base from "./base_layout";
import {Layout, Menu, Dropdown, Avatar, Row, Col, Button, Popover, Badge} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {
    DashboardIcon,
    ClassIcon,
    ReportIcon,
    ExamIcon,
    ChatIcon,
    OpenSidebarIcon,
    EnvelopeIcon,
    BellIcon,
    ChevronDownIcon
} from "../componenets/icons";
import Icon from "@ant-design/icons";
import Search from "antd/es/input/Search";
import Link from "antd/lib/typography/Link";
import BaseLayout from "./base_layout";
import SidebarItems from "../componenets/sider-menu";



class Teacher extends React.Component {
    render() {
        return (
          <Layout>

          </Layout>
        );
    }
}
console.log(window.location.pathname)
export default Teacher;