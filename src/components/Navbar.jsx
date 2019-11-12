import React, {useState} from "react";
import "antd/dist/antd.css";
import { Menu, Icon, Layout } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const Navbar = () => {
  return (
    <>
      <Header>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </>
  );
};

export default Navbar;
