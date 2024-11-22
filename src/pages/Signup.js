import React, { useState } from 'react';
import { Input, Button, Form, message, Row, Col } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    // Simulate API call (Use Firebase here in actual implementation)
    setTimeout(() => {
      message.success('Sign up successful!');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Create an Account</h1>
      <Row justify="center">
        <Col span={12} sm={18} md={8} lg={6}>
          <Form
            onFinish={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-xl"
            layout="vertical"
          >
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input prefix={<MailOutlined />} type="email" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="w-full py-3 text-lg"
              loading={loading}
            >
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default SignUpForm;
