import { Fragment, PureComponent } from "react";
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, SelectOutlined, BankOutlined } from '@ant-design/icons';
import './navigations.scss';
import React from "react";
import { useSelector } from "react-redux";
// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

type MyProps = {
    user: any
};

type MyState = { collapsed: boolean, key: string, user: any };
export default class DashNavigation extends PureComponent<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            collapsed: false,
            key: '/',
            user: props?.user
      
        };
    }
  
    componentWillMount() {
      const pathname = window.location.pathname;
      // console.log({pathname});
      this.setState({
        key: pathname,
      });
    }

    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    };
  
    render() {
        const {children} = this.props;
        const {user} = this.state;
        // console.log({user});
        
        
        return (
            <Fragment>
                <Layout className="bg-white">
                    <Sider
                        width={200}
                        trigger={null} 
                        collapsible
                        collapsed={this.state.collapsed}
                        className="site-layout-background"
                        breakpoint="lg"
                        collapsedWidth="80"
                        onBreakpoint={(broken) => {
                            // console.log({broken});
                            this.setState({collapsed: broken})
                        }}
                    >
                    <div className='logo'>
                        <img className="img-fluid rounded-circle" src={user?.avatar} alt="user" height={35} width={35} /> <span>{user?.name?.match(/\b([A-Z])/g).join('')}</span>
                        {/* <UserOutlined className="logo-img" /> <span>MMHK</span> */}
                    </div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[this.state.key]}
                        // defaultOpenKeys={['0']}
                        style={{borderRight: 0 }}
                        
                    >
                        <Menu.Item key="/" icon={<BankOutlined />}>
                            <Link to="/" className="link-item">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="/users" icon={<UserOutlined />}>
                            <Link to='/users'>Users</Link>    
                        </Menu.Item>
                        <Menu.Item key="/posts" icon={<SelectOutlined />}>
                            <Link to='/posts'>Posts</Link>
                        </Menu.Item>
                        
                    </Menu>
                    </Sider>
                    <Layout style={{ padding: '0' }}>
                        <Header style={{ padding: 5, background: '#fff', borderBottom: '1px solid #ddd' }}>
                            {
                                React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: this.toggle,
                                    
                                })
                            }
                        </Header>
                        <Content
                            className="content-layout-background"
                            style={{
                                padding: "10px 10px 0 10px",
                                margin: 0,
                                // minHeight: 580,
                            }}
                        >
                            {
                                children
                            }
                        </Content>
                    </Layout>
                    
                </Layout>
            </Fragment>
        );
      }
    }