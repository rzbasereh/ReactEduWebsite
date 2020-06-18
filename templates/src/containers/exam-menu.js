import React from "react";
import {MenuIcon,
        PlusIcon,
        UserIcon,
        CheckedIcon
} from "../componenets/icons";
import {Menu, Button, Row} from 'antd';
import {Link} from "react-router-dom";
import {connect} from "react-redux"

const mapStateToProps = state => {
    return {
        count: state.teacher.data.selectedQuestion,
        pack_pk: state.teacher.data.pack_pk,
    }
};

class AllQuestionPageMenuItems extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.count === "") {
            this.state = {
                display : 'none'
            }
        }
    }
    render() {
        return (
            <>
                <Menu className="exam-menu"
                      mode="inline"
                      theme="light"
                      defaultSelectedKeys={['1']}>
                    <Menu.Item>
                        <Link>
                            <Button type="primary" icon={<PlusIcon/>}>
                                افزودن سوال
                            </Button>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="1" icon={<MenuIcon/>}>
                        <Link to="/teacher/exam">
                            <span>همه ی سوالات</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserIcon/>}>
                        <Link>
                            <span>سوالات شما</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <span>فیلتر ها</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link>
                            <span>سوالات شما</span>
                            {/*<span>{this.props.pack_pk} </span>*/}
                            {/*<span> {this.props.count}</span>*/}
                        </Link>
                    </Menu.Item>
                </Menu>
                <Link>
                    <Row className='counter'>
                            <CheckedIcon/>
                            <span>سوالات انتخاب شده</span>
                            <span className={this.props.count === 0  ? "no-event" : ""}>({this.props.count})</span>
                    </Row>
                </Link>
            </>
        );
    }
}



export default connect(mapStateToProps)(AllQuestionPageMenuItems);