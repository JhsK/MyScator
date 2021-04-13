import React from "react";
import styled from "styled-components";

import AvatarImg from "../public/h.jpg";

const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dde7e5;
  width: 100%;
  padding: 0.7rem 1rem;

  & img {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-right: 1rem;
  }

  & span {
    font-weight: 900;
    font-size: 1.2rem;
  }
`;
const MainMenu = ({ children } = Home) => {
  return (
    <Header>
      <img src={AvatarImg} alt="avatar" />
      <span>{children}</span>
    </Header>
  );
};

export default MainMenu;
