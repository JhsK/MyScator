import React from "react";
import styled, { css } from "styled-components";

import { useSelector } from "react-redux";
import { BiHomeCircle } from "react-icons/bi";
import { FiSearch, FiMail } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

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

const FooterBtn = () => {
  return (
    <Footer>
      <BiHomeCircle className="footerIcon" />
      <FiSearch className="footerIcon" />
      <IoIosNotificationsOutline className="footerIcon" />
      <FiMail className="footerIcon" />
    </Footer>
  );
};

export default FooterBtn;
