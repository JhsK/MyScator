import React from "react";
import { createGlobalStyle } from "styled-components";

import MainMenu from "./MainMenu";
import MainPostList from "./MainPostList";
import MainPostWrite from "./MainPostWrite";

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
      <MainPostWrite />
      <MainPostList />
      <MainPostList />
    </>
  );
};

export default MainLayout;
