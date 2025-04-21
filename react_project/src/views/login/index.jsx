import React from "react";
import { memo, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { LoginWrapper } from "./style";
import ZlLogin from "./c-cpns/zl_login";
import ZlRegister from "./c-cpns/zl_register";
import ZlForget from "./c-cpns/zl_forget";

const Login = () => {
  const { formType } = useSelector(
    (state) => ({
      formType: state.login.formType,
    }),
    shallowEqual
  );

  return (
    <LoginWrapper>
      <div className="container">
        {formType === "login" && <ZlLogin />}
        {formType === "register" && <ZlRegister />}
        {formType === "forget" && <ZlForget />}
      </div>
    </LoginWrapper>
  );
};

export default memo(Login);
