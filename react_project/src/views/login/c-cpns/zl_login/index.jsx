import React from "react";
import { memo } from "react";
import { Button, Form, Input, Flex } from "antd";
import { useDispatch } from "react-redux";

import { setFormTypeAction, setUserAction } from "@/store/modules/login";
import { LoginWrapper } from "./style";

const ZlLogin = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(setUserAction(values));
    localStorage.setItem("user", JSON.stringify(values));
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // 改变表单类型
  const setFormType = (type) => {
    dispatch(setFormTypeAction(type));
  };
  // 密码校验
  const validatePass = (rule, value) => {
    if (!value) {
      return Promise.reject(new Error("请输入密码！"));
    }

    // 2. 最小长度校验
    if (value.length < 6) {
      return Promise.reject(new Error("密码长度不能少于6位！"));
    }
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (!hasUpper) {
      return Promise.reject(new Error("密码必须包含至少1个大写字母！"));
    }
    if (!hasLower) {
      return Promise.reject(new Error("密码必须包含至少1个小写字母！"));
    }
    if (!hasNumber) {
      return Promise.reject(new Error("密码必须包含至少1个数字！"));
    }
    if (!hasSpecialChar) {
      return Promise.reject(new Error("密码必须包含至少1个特殊字符！"));
    }
    return Promise.resolve();
  };
  // 校验规则
  const rules = {
    username: [
      { required: true, message: "请输入用户名！" },
      { max: 6, message: "用户名长度不能超过6位！" },
      { pattern: /^[a-zA-Z0-9]+$/, message: "用户名只能包含字母和数字！" },
    ],
    password: [{ validator: validatePass, trigger: "change" }],
  };

  return (
    <LoginWrapper>
      <Form
        name="login"
        style={{ maxWidth: 400 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <p className="title">登录</p>
        <Form.Item name="username" rules={rules.username}>
          <Input placeholder="请输入用户名！" autoComplete="off" />
        </Form.Item>

        <Form.Item name="password" rules={rules.password}>
          <Input.Password
            placeholder="请输入密码！"
            autoComplete="new-password"
          />
        </Form.Item>
        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <div className="forget">
              <span className="skip" onClick={() => setFormType("forget")}>
                忘记密码
              </span>
            </div>
            <div className="register">
              没有帐号？
              <span className="skip" onClick={() => setFormType("register")}>
                快速注册
              </span>
            </div>
          </Flex>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
};

export default memo(ZlLogin);
