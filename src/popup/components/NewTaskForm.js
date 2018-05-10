import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import { Form, DatePicker, Input, Button, message } from 'antd';
import moment from 'moment';
import ColorPickerFormItem from './ColorPickerFormItem';
import { popupStorage, objPick } from '../../lib/utils';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const noop = () => {};

class NewTaskForm extends (PureComponent || Component) {
  static propTypes = {
    handleOk: PropTypes.func,
    handleCancel: PropTypes.func
  };

  static defaultProps = {
    handleOk: noop,
    handleCancel: noop
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const rangeValue = fieldsValue['timeRange'];
      const values = {
        ...fieldsValue,
        beginTime: rangeValue[0].unix(),
        endTime: rangeValue[1].unix()
      };
      const listTasks = popupStorage.getItem('listTasks') || [];
      listTasks.push(objPick(values, ['color', 'title', 'beginTime', 'endTime']));
      popupStorage.setItem('listTasks', listTasks);
      message.success('Task is successfully created.');
      this.props.form.resetFields();
      this.props.handleOk();
    });
  };

  handleCancel = () => {
    this.props.form.resetFields();
    this.props.handleCancel();
  }

  disabledDate = current => (current < moment().endOf('day'));

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 12
      }
    };
    const colorConfig = {
      initialValue: '#e00',
      rules: [{
        type: 'string',
        required: true,
        message: 'Please pick task color!'
      }],
    };
    const titleConfig = {
      rules: [{ type: 'string', required: true, message: 'Please enter task title!' }],
    };
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time range!' }],
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Task Color"
        >
          {getFieldDecorator('color', colorConfig)(
            <ColorPickerFormItem
              style={{
                position: "relative",
                top: 4
              }}
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Task Title"
        >
          {getFieldDecorator('title', titleConfig)(
            <Input
              placeholder="Please enter task title"
            />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Time Range"
        >
          {getFieldDecorator('timeRange', rangeConfig)(
            <RangePicker
              disabledDate={this.disabledDate}
            />
          )}
        </FormItem>
        <div
          style={{
            textAlign: 'center'
          }}
        >
          <Button
            type="primary"
            htmlType="submit">提交</Button>
          <Button
            style={{ marginLeft: 10 }}
            onClick={this.handleCancel}
            htmlType="button">取消</Button>
        </div>
      </Form>
    );
  }
};

export default Form.create()(NewTaskForm);
