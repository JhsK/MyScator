import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { BiHomeCircle } from "react-icons/bi";
import { FiSearch, FiMail } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { footerAction } from "../reducers/user";

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
`;

const FooterBtn = ({ data }) => {
  const dispatch = useDispatch();
  const footerOnclick = useCallback(
    (e) => {
      const btnId = Number(e.target.className.animVal);
      dispatch(footerAction(btnId));
    },
    [data]
  );
  return (
    <Footer data>
      <BiHomeCircle
        className="1"
        style={data === 1 && { color: "#1da1f2" }}
        onClick={footerOnclick}
      />
      <FiSearch
        className="2"
        style={data === 2 && { color: "#1da1f2" }}
        onClick={footerOnclick}
      />
      <IoIosNotificationsOutline
        className="3"
        style={data === 3 && { color: "#1da1f2" }}
        onClick={footerOnclick}
      />
      <FiMail
        className="4"
        style={data === 4 && { color: "#1da1f2" }}
        onClick={footerOnclick}
      />
    </Footer>
  );
};

export default FooterBtn;
