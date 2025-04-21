import React from "react";
import { memo, useState, useEffect } from "react";
import { Button, Form, Input, Flex, Space } from "antd";
import { useDispatch } from "react-redux";

import { setFormTypeAction, setRegisterAction } from "@/store/modules/login";
import { RegisterWrapper } from "./style";

const ZlRegister = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(setRegisterAction(values));
    localStorage.setItem("register", JSON.stringify(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // 改变表单类型
  const setFormType = (type) => {
    dispatch(setFormTypeAction(type));
  };
  // 密码校验
  const validatePass = (_, value) => {
    if (!value) {
      return Promise.reject(new Error("请输入密码！"));
    }

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
    phone: [
      { required: true, message: "请输入手机号！" },
      { pattern: /^1[3-9]\d{9}$/, message: "手机号格式不正确！" },
    ],
    code: [
      { required: true, message: "请输入验证码！" },
      { pattern: /^\d{6}$/, message: "验证码格式不正确！" },
    ],
    password: [{ validator: validatePass, trigger: "change" }],
  };
  const [countdown, setCountdown] = useState(0);
  const [register] = Form.useForm();
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);
  // 获取验证码
  const handleCode = async () => {
    await register.validateFields(["phone"]);
    setCountdown(30);
  };
  return (
    <RegisterWrapper>
      <Form
        form={register}
        name="register"
        style={{ maxWidth: 400 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <p className="title">用户注册</p>
        <Form.Item name="username" rules={rules.username}>
          <Input placeholder="请输入用户名" autoComplete="off" />
        </Form.Item>
        <Form.Item name="phone" rules={rules.phone}>
          <Input placeholder="请输入手机号" autoComplete="off" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Form.Item noStyle name="code" rules={rules.code}>
              <Input
                style={{ width: 240 }}
                placeholder="请输入验证码"
                autoComplete="off"
              />
            </Form.Item>
            <Button
              type="primary"
              onClick={handleCode}
              disabled={countdown > 0}
            >
              {countdown > 0 ? `${countdown}秒后重发` : "获取验证码"}
            </Button>
          </Space>
        </Form.Item>
        <Form.Item name="password" rules={rules.password}>
          <Input.Password
            placeholder="请输入密码！"
            autoComplete="new-password"
          />
        </Form.Item>
        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit">
            立即注册
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
              已有帐号？
              <span className="skip" onClick={() => setFormType("login")}>
                马上登录
              </span>
            </div>
          </Flex>
        </Form.Item>
      </Form>
    </RegisterWrapper>
  );
};

export default memo(ZlRegister);
