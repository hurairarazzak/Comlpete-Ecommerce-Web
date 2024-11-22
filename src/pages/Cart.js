import React, { useState } from "react";
import { Button, Card, Col, Row, Input, Form, message } from "antd";
import { CreditCardOutlined, ShopOutlined } from "@ant-design/icons"; // Removed PaypalOutlined

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [form] = Form.useForm();

  // Dummy cart items data
  const cartItems = [
    {
      id: 1,
      title: "Product 1",
      price: 199,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      title: "Product 2",
      price: 299,
      quantity: 1,
      imageUrl: "https://via.placeholder.com/300",
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePaymentSelection = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
  };

  const handleSubmit = () => {
    if (!selectedPayment) {
      message.error("Please select a payment method.");
      return;
    }
    message.success("Payment successful! Thank you for your order.");
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card title="Shipping Information" className="shadow-lg rounded-xl p-6">
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true, message: "Please enter your address" }]}
              >
                <Input placeholder="123 Main St, City, Country" />
              </Form.Item>

              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[{ required: true, message: "Please enter your phone number" }]}
              >
                <Input placeholder="123-456-7890" />
              </Form.Item>

              <div className="flex justify-between items-center mt-6">
                <h2 className="text-xl font-semibold">Total: ${calculateTotal()}</h2>
                <Button type="primary" size="large" htmlType="submit">
                  Confirm Order
                </Button>
              </div>
            </Form>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Payment Options" className="shadow-lg rounded-xl p-6">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Card
                  onClick={() => handlePaymentSelection("creditCard")}
                  className={`payment-method-card ${selectedPayment === "creditCard" ? "selected" : ""}`}
                  hoverable
                >
                  <div className="flex items-center">
                    <CreditCardOutlined className="text-2xl mr-4" />
                    <span className="font-semibold">Credit Card</span>
                  </div>
                </Card>
              </Col>

              <Col span={24}>
                <Card
                  onClick={() => handlePaymentSelection("paypal")}
                  className={`payment-method-card ${selectedPayment === "paypal" ? "selected" : ""}`}
                  hoverable
                >
                  <div className="flex items-center">
                    <CreditCardOutlined className="text-2xl mr-4" /> {/* Replace PayPal with CreditCard icon */}
                    <span className="font-semibold">PayPal</span>
                  </div>
                </Card>
              </Col>

              <Col span={24}>
                <Card
                  onClick={() => handlePaymentSelection("cod")}
                  className={`payment-method-card ${selectedPayment === "cod" ? "selected" : ""}`}
                  hoverable
                >
                  <div className="flex items-center">
                    <ShopOutlined className="text-2xl mr-4" />
                    <span className="font-semibold">Cash on Delivery (COD)</span>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
