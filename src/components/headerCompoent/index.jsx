import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const { Header } = Layout;

const HeaderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>
  );
};

export default HeaderComponent