import React from "react";
import Button from "antd/es/button";
import {Modal} from "antd";
import {ChartIcon, XIcon} from "./icons";
import Form from "antd/es/form";
import Switch from "antd/es/switch";
import {Link} from "react-router-dom";
import InputNumber from "antd/es/input-number";
import TextArea from "antd/es/input/TextArea";
import Input from "antd/es/input";


const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

class SubmitModal extends React.Component {

    state = {
        visible: false,
        loading: false
    };

    showSubmitModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleSubmitModalOk = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 3000);
    };

    handleSubmitModalCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <Button type='primary' onClick={this.showSubmitModal}>
                    تایید سوالات
                </Button>
                <Modal
                    visible={this.state.visible}
                    title="اطلاعات آزمون"
                    onOk={this.handleSubmitModalOk}
                    onCancel={this.handleSubmitModalCancel}
                    closeIcon={<XIcon/>}
                    className='edit-submit-modal'
                    footer={[
                        <Button key="back" onClick={this.handleSubmitModalCancel}>
                            بازگشت
                        </Button>,
                        <Link to='teacher/exam/manage_exam'>
                            <Button key="submit" type="primary" htmlType='submit' loading={this.state.loading}
                                    onClick={this.handleSubmitModalOk}>
                                ثبت نهایی
                            </Button>
                        </Link>
                    ]}
                >
                    <Form
                        labelCol={{span: 4}}
                        wrapperCol={{span: 14}}
                        layout="horizontal"
                        size='small'
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        initialValues={{remember: true}}
                    >
                        <Form.Item>
                            <label>عنوان</label>
                            <Input/>
                        </Form.Item>
                        <Form.Item>
                            <label>زمان پیشنهادی</label>
                            <InputNumber
                                placeholder='ثانیه'
                                min={0}
                                max={59}
                                className='second'
                            />
                            <InputNumber
                                placeholder='دقیقه'
                                min={0}
                                max={59}
                            />
                            <InputNumber
                                placeholder='ساعت'
                                min={1}
                                max={9}
                            />
                        </Form.Item>
                        <Form.Item>
                            <label>توضیحات آزمون</label>
                            <TextArea
                                autoSize={{minRows: 4, maxRows: 6}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <label>گزینه تصادفی</label>
                            <Switch/>
                        </Form.Item>
                        {/*submit button should created as a form-item here*/}
                    </Form>
                </Modal>
            </>
        );

    }
}

class ChartModal extends React.Component {
    state = {
        visible: false,
    };
    show = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({loading: true});
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
                <Button type="primary" onClick={this.show}>
                    <ChartIcon/>
                </Button>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                </Modal>
            </>
        );
    }
}

export {SubmitModal, ChartModal};