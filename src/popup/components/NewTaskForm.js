import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import { Form, DatePicker, Input, Button } from 'antd';
import ColorPickerFormItem from './ColorPickerFormItem';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

class NewTaskForm extends (PureComponent || Component) {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const rangeValue = fieldsValue['range-picker'];
      const values = {
        ...fieldsValue,
        'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
      };
      console.log('Received values of form: ', values);
    });
  };

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
          {getFieldDecorator('range-picker', rangeConfig)(
            <RangePicker />
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
            htmlType="button">取消</Button>
        </div>
      </Form>
    );
  }
};

export default Form.create()(NewTaskForm);
