import { Avatar, Space } from "antd";
import React from "react";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

function Header({ title }) {
  return (
    <HeaderStyle>
      <h3>{title}</h3>
      {/* <AvatarDiv></AvatarDiv> */}
      {/* <Space wrap size={16} style={{ paddingRight: "10px" }}></Space> */}
      <button
        onClick={() => {
          console.log("hello world");
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          marginRight: "16%",
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
          Admin
        </p>
      </button>
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
    /* margin-left: 20px; */
  }
`;
