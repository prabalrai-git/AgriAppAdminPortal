import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Breadcrumb, Layout, Menu, Space, theme } from "antd";
import { useState } from "react";
import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import styled from "styled-components";
import MainRoute from "../routes/MainRoute";
import logo from "../assets/logo1.png";
import { setSidebarCollaspedStore } from "../store/features/SideBarCollasped/sideBarCollaspedSlice";
import { useDispatch } from "react-redux";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "dashboard", <PieChartOutlined />),
  getItem("Reports", "Reports", <FileOutlined />, [
    getItem("Baali By Location", "baaliByLocation"),
    getItem("Provience-Land ", "provienceLand "),
  ]),
];

const MainLayout = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log(e, "click");

    navigate(`/${e.key}`);
  };

  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => {
          setCollapsed(value);
          dispatch(setSidebarCollaspedStore(value));
        }}
      >
        <SideBarTop>
          <img
            src={logo}
            alt="car"
            style={{ width: collapsed ? "50%" : "25%" }}
          />
          {!collapsed && (
            <p
              style={{
                color: "white",
                fontSize: collapsed ? "10px" : "15px",
                // textAlign: "center",
                marginLeft: "-30px",
                marginTop: "10px",
                fontWeight: "500",
              }}
            >
              Agriculture App
            </p>
          )}
        </SideBarTop>
        <Menu
          theme="dark"
          onClick={onClick}
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        {/* <Header
          style={{
            backgroundColor: "white",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
          }}
        >
          <HeaderDiv>
            <h1>Agriculture App</h1>
           
          </HeaderDiv>
        </Header> */}
        <Content
          style={
            {
              // margin: "10px 5px",
              // backgroundColor: "white",
              // borderRadius: "10px",
              // padding: "10px",
            }
          }
        >
          {/* <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}

          <MainRoute />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;

const HeaderDiv = styled.div`
  width: "80%";
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  height: 10px;
`;

const SideBarTop = styled.div`
  /* height: 100px; */
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  height: auto;
  width: 100%;
  /* padding: 8px; */
  position: relative;
  margin-bottom: 12px;
  img {
    width: 25%;
  }
`;
