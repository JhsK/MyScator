import React from "react";
import { useSelector } from "react-redux";

import MainLayout from "../components/MainLayout";

const main = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <>
      {isLoggedIn ? <MainLayout /> : alert("로그인을 통해 접근이 가능합니다")}
    </>
  );
};

export default main;
