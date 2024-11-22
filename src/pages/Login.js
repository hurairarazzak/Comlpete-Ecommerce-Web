import React, { useState } from 'react';
import { Input, Button, Form, message, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    // Simulate login logic here (Firebase or API integration)
    setTimeout(() => {
      message.success('Login successful!');
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Login to Your Account</h1>
      <Row justify="center">
        <Col span={12} sm={18} md={8} lg={6}>
          <Form
            onFinish={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-xl"
            layout="vertical"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter your email" />
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
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default LoginForm;
