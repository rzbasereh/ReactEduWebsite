import React from "react";
import {
    MenuIcon,
    PlusIcon,
    UserIcon,
    CheckedIcon,
    ExclamationIcon,
    XIcon
} from "../componenets/icons";
import {Menu, Button, Row, notification} from 'antd';
import {Link} from "react-router-dom";
import {connect} from "react-redux"


const mapStateToProps = state => {
    return {
        count: state.teacher.data.selectedQuestion,
        pack_pk: state.teacher.data.pack_pk,
    }
};

class AllQuestionPageMenuItems extends React.Component {

    openNotification = () => {
        notification.error({
            message: 'خطا',
            description: 'سوالی انتخاب نشده است !',
            duration: 3,
            placement: 'bottomLeft',
            icon: ExclamationIcon(),
            closeIcon: XIcon(),
            className: 'error'
        })
    };

    handleDisabledCounter = (e) => {
        this.openNotification();
        e.preventDefault();
    };

    render() {
        return (
            <>
                <Link className='go-to-add-question-btn' onChange={this.u}>
                    <Button type="primary" icon={<PlusIcon/>}>
                        افزودن سوال
                    </Button>
                </Link>
                <Menu className="exam-menu"
                      mode="inline"
                      theme="light"
                      defaultSelectedKeys={['1']}>
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
                        </Link>
                    </Menu.Item>
                </Menu>
                <Link
                    to='/teacher/exam/edit_exam'
                    onClick={this.props.count === 0 ? this.handleDisabledCounter : null}
                    className={this.props.count === 0 ? 'disabled-counter' : 'counter'}
                >
                    <CheckedIcon/>
                    <span>
                            سوالات انتخاب شده
                        </span>
                    <span
                        className={this.props.count === 0 ? "no-event" : ""}
                    >
                            ({this.props.count})
                    </span>
                </Link>
            </>
        );
    }
}

export default connect(mapStateToProps)(AllQuestionPageMenuItems);