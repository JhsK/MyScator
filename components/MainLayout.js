import React from "react";
import { createGlobalStyle } from "styled-components";

import MainMenu from "./MainMenu";
import MainPostList from "./MainPostList";

const HeaderPadding = createGlobalStyle`
  body {
    padding-top: 3rem;
  }
`;

const MainLayout = () => {
  return (
    <>
      <HeaderPadding />
      <MainMenu>Home</MainMenu>
      <MainPostList />
      <MainPostList />
      <MainPostList />
      <MainPostList />
      <MainPostList />
      <MainPostList />
      <MainPostList />
      <MainPostList />
      <MainPostList />
    </>
  );
};

export default MainLayout;
