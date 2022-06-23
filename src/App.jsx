import './App.css'
import { Breadcrumb, Layout} from 'antd';
import TopBar from './components/layouts/TopBar';
import Aside from './components/layouts/Aside';

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Aside /> 
      <Layout className="site-layout">
        <TopBar />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Aicare Portal ©2022 Created by Aicare Team
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;