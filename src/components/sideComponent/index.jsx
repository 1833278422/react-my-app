import Icon, {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import menuConfig from "../../config";
const { Sider } = Layout;

const iconElememt = (name) => React.createElement(Icon[name])

const getItems = (menuConfig) => {
    return  menuConfig.map(val => {
        const {name,label , icon, children} = val
        const child = {
            key: name,
            label: label,
            // icon: icon && iconElememt(icon)
        }
        if(children?.length) {
            child.children = getItems(children)
        }
        return child
    })
}

const items = getItems(menuConfig)
console.log(items)
const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <h3>通用后台管理系统</h3>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
      />
    </Sider>
  );
};

export default SiderComponent;
