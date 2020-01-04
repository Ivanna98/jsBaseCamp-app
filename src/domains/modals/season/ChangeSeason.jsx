import React from 'react';
import { Form, Input, Col, Row, Select, DatePicker } from 'antd';

export const ChangeSeason = ({ form: { getFieldDecorator } }) => {
  return (
    <Form layout="vertical" hideRequiredMark>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="SeasonNumber">
            {getFieldDecorator('seasonNumber', {
              rules: [{ required: true, message: 'Please enter season number' }],
            })(<Input placeholder="Please enter season number" />)}
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="SeasonName">
            {getFieldDecorator('seasonName', {
              rules: [{ required: true, message: 'Please enter name season' }],
            })(<Input placeholder="Please enter name season" />)}
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Poster">
            {getFieldDecorator('posterURL', {
              rules: [{ required: false, message: 'Please enter poster image`s url' }],
            })(<Input placeholder="Please enter poster image`s url" />)}
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
        <Col span={24}>
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