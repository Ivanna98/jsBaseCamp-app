import React from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import axios from 'axios';
import { config } from '../../config';

const Login = ({ form, history }) => {
  
  const onSubmit = React.useCallback(e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        axios.post(`${config.api}/auth`, values)
          .then(({ data }) => {
            localStorage.setItem('auth', data.token);
            history.push('/shows');
          })
          .catch(e => message.error(e.response.data));
      }
    });
  }, [form]);

  return (
    <section className='m-5 p3 h-100'>
      <Form onSubmit={onSubmit} className="login-form">
        <Form.Item>
          {form.getFieldDecorator('name', {
            rules: [{ required: true }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="name"
              name="name"
            />
          )}
        </Form.Item>
        <Form.Item>
          {form.getFieldDecorator('password', {
            rules: [{ required: true }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="password"
              name="password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <button className='custom-button m-5'>Login</button>
        </Form.Item>
      </Form>
    </section>
  );
};

export const LoginForm = Form.create({ name: 'login' })(Login);