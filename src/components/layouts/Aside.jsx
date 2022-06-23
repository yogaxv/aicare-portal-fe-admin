import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Aside  = ()  => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />} >
          <Link to="/">
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/404">
            <span>404</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Aside;