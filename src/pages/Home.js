import React from "react";
import { Card, Col, Row, Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  const products = [
    { id: 1, title: "Product 1", imageUrl: "https://via.placeholder.com/300", price: "$199", description: "This is product 1" },
    { id: 2, title: "Product 2", imageUrl: "https://via.placeholder.com/300", price: "$299", description: "This is product 2" },
    { id: 3, title: "Product 3", imageUrl: "https://via.placeholder.com/300", price: "$399", description: "This is product 3" },
    // Add more products as needed
  ];

  return (
    <div className="container mx-auto py-10">
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col span={8} key={product.id}>
            <Link to={`/product/${product.id}`}>
              <Card
                hoverable
                cover={<img alt={product.title} src={product.imageUrl} className="h-80 w-40 w-full object-cover" />}  
                className="transition-all transform hover:scale-105 shadow-lg rounded-xl overflow-hidden"
              >
                <Card.Meta
                  title={<h3 className="text-xl font-semibold">{product.title}</h3>}
                  description={
                    <>
                      <p className="text-gray-700 text-sm mb-2">{product.description}</p>
                      <p className="text-lg font-bold">{product.price}</p>
                    </>
                  }
                />
                <Button type="primary" className="mt-4 w-full" size="large">
                  Add to Cart
                </Button>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
