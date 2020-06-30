import React from "react";
import {
    Card,
    Collapse,
    Dropdown,
    Menu,
    Row,
    Tooltip
} from "antd";
import {
    ChevronLeftIcon,
    HouseIcon,
    ThreeDotIcon,
    TrashIcon,
    ArrowUpDownIcon,
    XIcon,
    PlusIcon
} from "../componenets/icons";
import Select from "antd/es/select";
import Col from "antd/es/grid/col";
import Button from "antd/es/button";
import {Link} from "react-router-dom";
import Search from "antd/es/input/Search";
import {SubmitModal, ChartModal} from "../componenets/modals";
import {render} from 'react-dom';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';


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

const trashTooltip = (
    <p className='tooltip'>حذف همه ی سوالات</p>
);
const arrowUpDownTooltip = (
    <p className='tooltip'>ترتیب بندی دلخواه سوالات</p>
);
const plusTooltip = (
    <p className='tooltip'>افزودن سوال</p>
);

// const handleDelete = key => {
//     const items = [...this.state.items];
//     this.setState({items: items.filter(item => item.key !== key)});
// };
const SortableItem = sortableElement(({value}) => <Row className="question-card-row">
    <Card>
        <Row className="path">
            <Col>
                <span></span>
                <ChevronLeftIcon/>
                <span></span>
                <ChevronLeftIcon/>
                <span></span>
            </Col>
            <Col>
                <span className='question-level simple'></span>
                <span>
                                        <ChartModal/>
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
            <Button className='remove-question-btn'>
                <XIcon/>
            </Button>
            <p>{value.questionContent}</p>
            <Row className="inline-choices">
                <span>1)<span className="choice-amount"></span></span>
                <span>2)<span className="choice-amount"></span></span>
                <span className='correct-choice'>3)<span
                    className="choice-amount"></span></span>
                <span>4)<span className="choice-amount"></span></span>
            </Row>
            <span className="question-img"><img alt="kanoon"/></span>
        </Row>
    </Card>
    <Collapse
        bordered={false}
        className="site-collapse-custom-collapse"
    >
        <Panel header="پاسخ تشریحی" key="1" className="site-collapse-custom-panel">
            <pre></pre>
        </Panel>
    </Collapse>
</Row>);

const SortableContainer = sortableContainer(({children}) => {
    return <Row className='questions'>{children}</Row>;
});

class EditExam extends React.Component {

    state = {
        show: true,
        items: [{
            key: '0',
            "id": 2590,
            "grade": "پایه ی دهم",
            "lesson": "ریاضیات",
            "topic": "مثلتات",
            "level": null,
            "questionContent": "wefewss",
            "firstChoice": null,
            "secondChoice": null,
            "thirdChoice": null,
            "fourthChoice": null,
            "verboseAns": null,
            "questionImg": "پایه ی دهم"
        },
            {
                key: '1',
                "id": 2589,
                "grade": "پایه ی دهم",
                "lesson": "ریاضیات",
                "topic": "مثلتات",
                "level": null,
                "questionContent": "wefewss",
                "firstChoice": null,
                "secondChoice": null,
                "thirdChoice": null,
                "fourthChoice": null,
                "verboseAns": null,
                "questionImg": "پایه ی دهم"
            },
            {
                key: '2',
                "id": 2588,
                "grade": "پایه ی دهم",
                "lesson": "ریاضیات",
                "topic": "مثلتات",
                "level": null,
                "questionContent": "wefewss",
                "firstChoice": null,
                "secondChoice": null,
                "thirdChoice": null,
                "fourthChoice": null,
                "verboseAns": null,
                "questionImg": "پایه ی دهم"
            },
            {
                key: '3',
                "id": 2587,
                "grade": "پایه ی دهم",
                "lesson": "ریاضیات",
                "topic": "مثلتات",
                "level": null,
                "questionContent": "wefewss",
                "firstChoice": null,
                "secondChoice": null,
                "thirdChoice": null,
                "fourthChoice": null,
                "verboseAns": null,
                "questionImg": "پایه ی دهم"
            }],
    };

    handleTrash = () => {
        this.setState({
            show: !this.state.show
        })
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };


    render() {

        const {items} = this.state;

        return (
            <>
                <Row>
                    <h1 className='pages-heading'>ویرایش سوالات<span>()</span></h1>
                    <Row>
                        <Col span={12} className='path'>
                            <HouseIcon/>
                            <ChevronLeftIcon/>
                            <Link to='/teacher/exam'>آزمون ها</Link>
                            <ChevronLeftIcon/>
                            <Link to='/teacher/exam/edit_exam'>ویرایش آزمون </Link>
                        </Col>
                        <Col span={12} className='edit-page-trash-arrow'>
                            <Tooltip placement='top' title={trashTooltip}>
                                {/*<Link to='/teacher/exam'>*/}
                                <TrashIcon onClick={this.handleTrash}/>
                                {/*</Link>*/}
                            </Tooltip>
                            <Tooltip placement='top' title={arrowUpDownTooltip}>
                                <ArrowUpDownIcon/>
                            </Tooltip>
                        </Col>
                    </Row>
                    <Row className="all-questions-header">
                        <span>نمایش</span>
                        <Select defaultValue='از سخت به ساده' style={{width: 145}}>
                            <Option value="ساده به سخت">ساده به سخت</Option>
                            <Option value="سخت به ساده">سخت به ساده</Option>
                        </Select>
                        <Select defaultValue='تالیفی' style={{width: 90}}>
                            <Option value="سراسری">سراسری</Option>
                            <Option value="سنجش">سنجش</Option>
                            <Option value="قلمچی">قلمچی</Option>
                            <Option value="گزینه دو">گزینه دو</Option>
                            <Option value="تالیفی">تالیفی</Option>
                        </Select>
                        <Select defaultValue='ساده' style={{width: 80}}>
                            <Option value="ساده">ساده</Option>
                            <Option value="متوسط">متوسط</Option>
                            <Option value="سخت">سخت</Option>
                        </Select>
                        <Search placeholder="جستجو" onSearch={value => console.log(value)} enterButton/>
                        <Tooltip placement='top' title={plusTooltip}>
                            <Link to='/teacher/exam'>
                                <Button>
                                    <PlusIcon/>
                                </Button>
                            </Link>
                        </Tooltip>
                    </Row>
                </Row>
                {this.state.show && (
                    <SortableContainer onSortEnd={this.onSortEnd}>
                        {items.map((value, index) => (
                            <SortableItem key={`item-${value}`} index={index} value={value}/>
                        ))}
                    </SortableContainer>
                )}
                <SubmitModal/>
            </>
        );
    };
}

export default EditExam;