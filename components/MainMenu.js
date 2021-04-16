import React from "react";
import styled from "styled-components";
import { BiHomeCircle } from "react-icons/bi";
import { FiSearch, FiMail } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

import AvatarImg from "../public/h.jpg";

const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dde7e5;
  width: 100%;
  padding: 0.7rem 1rem;
  z-index: 3;
  background-color: #fff;

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

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.8rem;
  border-top: 1px solid #dde7e5;
  padding: 0.8rem 0;
  background-color: #fff;
  z-index: 3;

  .footerIcon {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const MainMenu = ({ children }) => {
  return (
    <>
      <Header>
        <img src={AvatarImg} alt="avatar" />
        <span>{children}</span>
      </Header>
      <Footer>
        <BiHomeCircle className="footerIcon" />
        <FiSearch className="footerIcon" />
        <IoIosNotificationsOutline className="footerIcon" />
        <FiMail className="footerIcon" />
      </Footer>
    </>
  );
};

export default MainMenu;
