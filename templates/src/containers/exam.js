import React from "react";
import {Row, Card, Menu, Dropdown, Collapse, Modal, notification} from "antd";
import {
    HouseIcon,
    ChevronLeftIcon,
    ThreeDotIcon,
    XIcon,
    CheckIcon
} from "../componenets/icons";
import {Link} from "react-router-dom";
import Select from "antd/es/select";
import Search from "antd/es/input/Search";
import Checkbox from "antd/es/checkbox";
import Col from "antd/es/grid/col";
import KanoonImg from "../img/kanoon.png";
import Gozine2Img from "../img/Gozine2.png";
import SanjeshImg from "../img/Sanjesh.png";
import CaretRightOutlined from "@ant-design/icons/lib/icons/CaretRightOutlined";
import Pagination from "antd/es/pagination";
import Button from "antd/es/button";
import {getQuestion, getQuestionApi} from "../store/actions/teacher";
import {connect} from "react-redux";
import axios from "axios";
import {updatePackApi} from "../store/actions";
import {ChartModal} from "../componenets/modals";



const {Option} = Select;

const {Panel} = Collapse;

const getDropdownItemsKey = ({key}) => {
    console.log({key})
};
const menu = (
    <Menu onClick={getDropdownItemsKey}>
        <Menu.Item key="1">first item</Menu.Item>
    </Menu>
);

const text = `
  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
`;

class Exam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: 0,
            maxValue: 10,
            unit: 10,
        };
    }


    getPaginationUnit = (value) => {
        this.setState({
            unit: value,
        }, function () {
            this.props.getQuestionApi(0, this.state.unit);
        });
    };

    componentDidMount() {
        this.props.getQuestionApi(this.state.minValue, this.state.maxValue);
    }


    // pagination
    handleChange = value => {
        if (value <= 1) {
            this.setState({
                minValue: 0,
                maxValue: 10,
            });
            this.props.getQuestionApi(this.state.minValue, this.state.maxValue);
        } else {
            this.setState({
                minValue: (value - 1) * this.state.unit,
                maxValue: value * this.state.unit
            });
            this.props.getQuestionApi(this.state.minValue, this.state.maxValue);
        }
    };

    // checkbox and toast
    handleCheckbox = e => {
        console.log(e.target.checked);
        console.log(e.target.id);
        if (e.target.checked === true) {
            this.props.updatePackApi(e.target.id, 'add');
            notification.success({
                description:
                    'سوال با موفقیت اضافه شد .',
                duration: 3,
                placement: "bottomLeft",
                icon: CheckIcon(),
                closeIcon: XIcon(),
                className: 'success',
            });
        } else {
            this.props.updatePackApi(e.target.id, 'remove');
            notification.success({
                description:
                    'سوال با موفقیت حذف شد .',
                duration: 3,
                placement: "bottomLeft",
                icon: CheckIcon(),
                closeIcon: XIcon(),
                className: 'success',
            });
        }
    };

    // modal
    state = {visible: false};

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    render() {
        return (
            <>
                <Row>
                    <h1 className='pages-heading'>همه ی سوالات<span>()</span></h1>
                    <Row className="path">
                        <HouseIcon/>
                        <ChevronLeftIcon/>
                        <Link to='/teacher/exam'>آزمون ها</Link>
                        <ChevronLeftIcon/>
                        <Link to='/teacher/exam'> همه ی سوالات </Link>
                    </Row>
                    <Row className="all-questions-header">
                        <span>نمایش</span>
                        <Select defaultValue='10' style={{width: 60}} onChange={this.getPaginationUnit}>
                            <Option value="10">10</Option>
                            <Option value="15">15</Option>
                            <Option value="20">20</Option>
                            <Option value="25">25</Option>
                            <Option value="30">30</Option>
                        </Select>
                        <Select defaultValue="سخت به ساده" style={{width: 125}}>
                            <Option value="ساده به سخت">ساده به سخت</Option>
                            <Option value="سخت به ساده">سخت به ساده</Option>
                        </Select>
                        <Search placeholder="جستجو" onSearch={value => console.log(value)} enterButton/>
                    </Row>
                </Row>
                <Row className="questions">
                    {
                        this.props.questions &&
                        this.props.questions.length > 0 &&
                        this.props.questions.map(val => (
                            <Row className="question-card-row">
                                <Card>
                                    <Row className="path">
                                        <Col>
                                            <span>{val.grade}</span>
                                            <ChevronLeftIcon/>
                                            <span> {val.lesson}</span>
                                            <ChevronLeftIcon/>
                                            <span>{val.topic}</span>
                                        </Col>
                                        <Col>
                                            <span className='question-level simple'>{val.level}</span>
                                            <span>
                                        <ChartModal/>
                                        <Modal
                                            visible={this.state.visible}
                                            onOk={this.handleOk}
                                            onCancel={this.handleCancel}
                                            footer={null}
                                        >
                                        </Modal>
                                    </span>
                                            <span>
                                        <Dropdown overlay={menu}>
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <ThreeDotIcon/>
                                            </a>
                                        </Dropdown>
                                    </span>
                                        </Col>
                                    </Row>
                                    <Row className="question-content">
                                        <Checkbox onChange={this.handleCheckbox} id={val.id}></Checkbox>
                                        <p> {val.questionContent}</p>
                                        <Row className="inline-choices">
                                            <span>1)<span className="choice-amount">{val.firstChoice}</span></span>
                                            <span>2)<span className="choice-amount">{val.secondChoice}</span></span>
                                            <span className='correct-choice'>3)<span
                                                className="choice-amount">{val.thirdChoice}</span></span>
                                            <span>4)<span className="choice-amount">{val.fourthChoice}</span></span>
                                        </Row>
                                        <span className="question-img"><img src={val.questionImg} alt="kanoon"/></span>
                                    </Row>
                                </Card>
                                <Collapse
                                    bordered={false}
                                    className="site-collapse-custom-collapse"
                                >
                                    <Panel header="پاسخ تشریحی" key="1" className="site-collapse-custom-panel">
                                        <pre>{val.verboseAns}</pre>
                                    </Panel>
                                </Collapse>
                            </Row>
                        ))}
                    <Pagination
                        total={this.props.count}
                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                        pageSize={this.state.unit}
                        defaultCurrent={1}
                        defaultPageSize={9}
                        onChange={this.handleChange}
                        size="small"
                    />
                </Row>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.teacher.data.count,
        questions: state.teacher.data.questions,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getQuestionApi: (minValue, maxValue) => dispatch(getQuestionApi(minValue, maxValue)),
        updatePackApi: (pk, state) => dispatch(updatePackApi(pk, state))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Exam);