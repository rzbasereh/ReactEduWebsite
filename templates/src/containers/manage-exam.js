import React from "react";
import {
    Card,
    Collapse,
    Dropdown,
    Menu,
    Row,
    Tooltip,
    Table,
    Tag,
    Space
} from "antd";
import Col from "antd/es/grid/col";
import Button from "antd/es/button";
import {Link} from "react-router-dom";
import Search from "antd/es/input/Search";
import {ChevronLeftIcon, HouseIcon} from "../componenets/icons";
import Select from "antd/es/select";


const {Column, ColumnGroup} = Table;
const data = [
    {
        key: '0',
        'examSubject': 'جامع دهم',
        'examTime': '2 : 30 : 30',
        'questionNumber': '20',
        'examInfo': 'برگزار شده'
    },
    {
        key: '1',
        'examSubject': 'جامع دهم',
        'examTime': '2 : 30 : 30',
        'questionNumber': '20',
        'examInfo': 'برگزار شده'
    },
    {
        key: '2',
        'examSubject': 'جامع دهم',
        'examTime': '2 : 30 : 30',
        'questionNumber': '20',
        'examInfo': 'برگزار شده'
    }
];

class ManageExam extends React.Component {



    render() {
        return (
            <>
                <Row>
                    <h1 className='pages-heading'>مدیریت آزمون</h1>
                    <Row className="path">
                        <HouseIcon/>
                        <ChevronLeftIcon/>
                        <Link to='/teacher/manage_exam'>مدیریت آزمون</Link>
                        <Row className="all-questions-header">
                            <Search placeholder="جستجو" onSearch={value => console.log(value)} enterButton/>
                        </Row>
                    </Row>
                </Row>
                <Row>
                    <Table dataSource={data}>
                        <Column title="عنوان آزمون" dataIndex="examSubject" key="examSubject"/>
                        <Column title="زمان آزمون" dataIndex="examTime" key="examTime"/>
                        <Column title="Address" dataIndex="address" key="address"/>
                        <Column
                            title="Action"
                            key="action"
                            render={(text, record) => (
                                <Space size="middle">
                                    <a>Delete</a>
                                </Space>
                            )}
                        />
                    </Table>
                </Row>
            </>
        );
    }

}

export default ManageExam;