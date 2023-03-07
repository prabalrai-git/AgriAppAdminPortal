import { Avatar, Popover, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header({ title }) {
  const isSideBarCollasped = useSelector(
    (state) => state.isSidebarCollasped.value
  );

  const user = localStorage.getItem("name");

  const navigate = useNavigate();

  const content = (
    <div>
      <a
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Logout
      </a>
    </div>
  );

  // console.log(isSideBarCollasped);
  return (
    <HeaderStyle>
      <div>
        <h3>{title}</h3>
      </div>
      <Space wrap size={16} style={{ paddingRight: "10px" }}></Space>

      <Popover content={content} placement="bottom">
        <div
          style={{
            position: "relative",
            right: isSideBarCollasped ? "6%" : "15%",
          }}
        >
          <button
            onClick={() => {
              // console.log("hello world");
            }}
            style={{
              display: "flex",
              flexDirection: "row",

              // marginRight: "200px",
              border: "none",
              backgroundColor: "white",
            }}
          >
            <Avatar size={28} icon={<UserOutlined />} />
            <p
              style={{
                marginLeft: "10px",
                fontSize: "13px",
                marginTop: "8px",
              }}
            >
              {user}
            </p>
          </button>
        </div>
      </Popover>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 8px;

  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px lightgrey;
  /* margin-top: 10px; */
  h3 {
    color: black;
    padding-left: 10px;
    margin-top: 8px;
    font-size: 20px;
    /* margin-left: 20px; */
  }
`;
const AvatarDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px;
  padding-right: 25px;
`;
