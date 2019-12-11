import React from 'react';
import { Form, Input, Col, Row, Select, DatePicker } from 'antd';

const priority = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const ChangeShow = ({ form: { getFieldDecorator } }) => {
  return (
    <Form layout="vertical" hideRequiredMark>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Title">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please enter title show' }],
            })(<Input placeholder="Please enter title show" />)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Subtitle">
            {getFieldDecorator('subtitle', {
              rules: [{ required: false, message: 'Please enter subtitle show' }],
            })(<Input placeholder="Please enter subtitle show" />)}
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Poster">
            {getFieldDecorator('posterImage', {
              rules: [{ required: false, message: 'Please enter poster image`s url' }],
            })(<Input placeholder="Please enter poster image`s url" />)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Genre">
            {getFieldDecorator('genre', {
              rules: [{ required: true, message: 'Please enter genre' }],
            })(<Input placeholder="Please enter genre" />)}
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Priority">
            {getFieldDecorator('priority', {
              rules: [{ required: true, message: 'Please choose the approver' }],
            })(
              <Select placeholder="Please choose the approver">
                {priority.map((value) =>
                  <Select.Option key={value} value={value}>{value}</Select.Option>
                )}
              </Select>,
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="VideoFragment URL">
            {getFieldDecorator('videoFragmentURL', {
              rules: [{ required: true, message: 'Please enter url' }],
            })(<Input placeholder="Please enter url" />)}
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Start date">
            {getFieldDecorator('startDate', {
              rules: [{ required: true, message: 'Please choose the start Date' }],
            })(
              <DatePicker.MonthPicker
                style={{ width: '100%' }}
                getPopupContainer={trigger => trigger.parentNode}
              />,
            )}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Short Description">
            {getFieldDecorator('shortDescription', {
              rules: [{ required: true, maxLength: 250 }],
            })(
              <Input.TextArea rows={4} placeholder="please enter short description" />,
            )}
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item label="Long Description">
            {getFieldDecorator('longDescription', {
              rules: [{ required: true, maxLength: 500 }],
            })(
              <Input.TextArea rows={4} placeholder="please enter long description" />,
            )}
          </Form.Item>
        </Col>
      </Row>
    </Form>);
};