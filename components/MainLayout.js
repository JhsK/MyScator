import React from "react";
import { useSelector } from "react-redux";
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
  const mainPosts = useSelector((state) => state.post.mainPosts);

  return (
    <>
      <HeaderPadding />
      <MainMenu>Home</MainMenu>
      <MainPostWrite />
      {mainPosts.map((post) => (
        <MainPostList key={post.id} post={post} />
      ))}
    </>
  );
};

export default MainLayout;
