import { Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import SiderComponent from "../components/sideComponent";
import HeaderComponent from "../components/headerCompoent";

const { Header, Sider, Content } = Layout;
const Main = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <SiderComponent></SiderComponent>
      <Layout className="site-layout">
        <HeaderComponent></HeaderComponent>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
