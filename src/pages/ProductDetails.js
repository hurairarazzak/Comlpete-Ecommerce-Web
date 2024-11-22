import React from "react";
import { Card, Button, Row, Col, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  // Fetch product details based on `id` (dummy data or from an API)
  const product = {
    title: "Sample Product",
    description: "This is a detailed description of the product.",
    price: "$199",
    imageUrl: "https://via.placeholder.com/500",
  };

  return (
    <div className="container mx-auto py-10">
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <img src={product.imageUrl} alt={product.title} className="w-full h-auto" />
        </Col>
        <Col span={12}>
          <Card>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mt-4">{product.description}</p>
            <h2 className="mt-4 text-xl font-semibold">{product.price}</h2>
            <Space className="mt-6">
              <Button type="primary" icon={<ShoppingCartOutlined />}>
                Add to Cart
              </Button>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
