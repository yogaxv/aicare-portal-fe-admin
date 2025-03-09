import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { PieChartOutlined, DesktopOutlined, FileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const Aside  = ()  => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["dashboard"]} mode="inline">
        <Menu.Item key="dashboard" icon={<PieChartOutlined />} >
          <Link to="/">
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="414" icon={<DesktopOutlined />}>
          <Link to="/404">
            <span>404</span>
          </Link>
        </Menu.Item>
        <Menu.SubMenu key="content" title="Konten" icon={<FileOutlined />}>
          <Menu.Item key="article">
            <Link to="/contents/article">Artikel</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  )
}

export default Aside;