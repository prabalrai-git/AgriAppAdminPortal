import React, { useState } from "react";
import styled from "styled-components";
import { Button, Checkbox, Form, Input, message } from "antd";
import { AuthenticateUserApi } from "../../services/Appservices/LoginServices";
import { useNavigate } from "react-router-dom";
import { setLoginDetails } from "../../store/features/Login/loginSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const clearState = () => {
    setPassword();
    setUserName();
  };

  const onFinish = () => {
    const data = {
      username: userName,
      password: password,
    };

    AuthenticateUserApi(data, (res) => {
      console.log(res, "res from login");
      if (res.length > 0) {
        dispatch(setLoginDetails(res));
        localStorage.setItem("name", res[0].Username);

        navigate("/dashboard");
      } else {
        message.error("Wrong username or password");
        clearState();
        form.resetFields();
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <MainDiv>
      <LoginDiv>
        <h2>Login</h2>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            // label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              placeholder="Enter your username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            // label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 24,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", marginTop: "10px" }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </LoginDiv>
    </MainDiv>
  );
}

export default Login;

const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  backdrop-filter: brightness(60%);
`;

const LoginDiv = styled.div`
  width: 25%;
  background-color: #f6f6f6;
  padding: 20px;
  padding-top: 40px;
  /* padding-right: 40px; */
  border-radius: 6px;

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }
`;
