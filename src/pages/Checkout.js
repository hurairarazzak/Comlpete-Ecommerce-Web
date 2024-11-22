import React from "react";
import { Form, Input, Button, Row, Col, Card, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const CheckoutPage = () => {
  const products = [
    { id: 1, title: "Product 1", price: "$199", quantity: 2 },
    { id: 2, title: "Product 2", price: "$299", quantity: 1 },
    { id: 3, title: "Product 3", price: "$399", quantity: 3 },
    // Add more products as needed
  ];

  // Calculate total price
  const calculateTotal = () => {
    return products.reduce((acc, product) => acc + parseFloat(product.price.slice(1)) * product.quantity, 0);
  };

  return (
    <div className="container mx-auto py-10">
      <Row gutter={24}>
        {/* Left side: Cart Items */}
        <Col span={16}>
          <Card
            title={<Title level={3} className="text-center">Your Cart</Title>}
            bordered={false}
            className="shadow-lg rounded-xl"
          >
            {products.map((product) => (
              <Row key={product.id} className="border-b py-4">
                <Col span={12}>
                  <Text className="font-semibold">{product.title}</Text>
                </Col>
                <Col span={6}>
                  <Text>${product.price}</Text>
                </Col>
                <Col span={6}>
                  <Text>x {product.quantity}</Text>
                </Col>
              </Row>
            ))}
            <Row className="border-t py-4">
              <Col span={12}>
                <Text className="font-semibold">Total:</Text>
              </Col>
              <Col span={12}>
                <Text className="font-semibold text-xl">${calculateTotal()}</Text>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Right side: Billing Details Form */}
        <Col span={8}>
          <Card
            title={<Title level={3} className="text-center">Billing Details</Title>}
            bordered={false}
            className="shadow-lg rounded-xl"
          >
            <Form
              layout="vertical"
              name="checkout-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please input your full name!" }]}
              >
                <Input placeholder="John Doe" className="rounded-md" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input type="email" placeholder="example@example.com" className="rounded-md" />
              </Form.Item>

              <Form.Item
                label="Shipping Address"
                name="address"
                rules={[{ required: true, message: "Please input your address!" }]}
              >
                <Input.TextArea placeholder="1234 Main St, City, Country" className="rounded-md" />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[{ required: true, message: "Please input your phone number!" }]}
              >
                <Input placeholder="+1 234 567 890" className="rounded-md" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full rounded-md" size="large">
                  Complete Purchase
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>

      <Row justify="center" className="mt-8">
        <Col>
          <Link to="/shop">
            <Button type="link" className="text-blue-600 hover:text-blue-800">
              Back to Shopping
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default CheckoutPage;
