import React from "react";
import { useSelector } from "react-redux";

import LoginLayout from "../components/LoginLayout";

const login = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <>
      {isLoggedIn ? <LoginLayout /> : alert("로그인을 통해 접근이 가능합니다")}
    </>
  );
};

export default login;
