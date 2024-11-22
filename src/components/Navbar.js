import React from "react";
import { Layout, Menu, Input, Button, Space } from "antd";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="bg-white shadow-md px-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">E-Shop</Link>
        <div className="flex items-center space-x-4">
          <Input
            placeholder="Search Products"
            prefix={<SearchOutlined />}
            className="rounded-lg"
            style={{ width: 200 }}
          />
          <Link to="/cart">
            <Button icon={<ShoppingCartOutlined />} shape="circle" />
          </Link>
          <div>
            <Link to="/login">
              <Button type="primary">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="ml-2">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
