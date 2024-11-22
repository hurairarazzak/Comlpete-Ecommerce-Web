import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import { LinkedinOutlined, GithubOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const PremiumFooter = () => {
  return (
    <Footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <Row justify="center">
          <Col span={24}>
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <Row justify="center" gutter={16}>
              <Col>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Button shape="circle" icon={<LinkedinOutlined />} size="large" />
                </a>
              </Col>
              <Col>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button shape="circle" icon={<GithubOutlined />} size="large" />
                </a>
              </Col>
              <Col>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Button shape="circle" icon={<InstagramOutlined />} size="large" />
                </a>
              </Col>
            </Row>
            <div className="mt-6">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default PremiumFooter;
