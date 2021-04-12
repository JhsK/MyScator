import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import styled, { createGlobalStyle } from "styled-components";

import indexBanner from "../public/indexBanner.png";

export const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        padding: 0;
        margin: 0 auto;
    }
`;

const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 2rem auto;
  padding: 0 1.7rem;

  .twitterIcon {
    padding-top: 1.5rem;
    font-size: 3rem;
    color: #1da1f2;
    margin-bottom: 2.5rem;
  }

  .title {
    font-weight: bold;
    font-size: 2.3rem;
    margin-bottom: 2rem;
  }

  .subTitle {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  & button {
    margin-bottom: 15px;
    padding: 0.8rem 0;
    border-radius: 20px;
    outline: none;
    font-weight: bold;
  }

  .joinBtn {
    color: #fff;
    background-color: #1da1f2;
    border: none;
  }

  .loginBtn {
    color: #1da1f2;
    background-color: #fff;
    border: 1px solid #1da1f2;
  }
`;

const BannerStyle = styled.div`
  position: relative;
  height: 100%;

  .test {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    font-size: 20rem;
    z-index: 3;
    color: #fff;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;

const IndexLayout = () => {
  return (
    <>
      <IndexContainer>
        <AiOutlineTwitter className="twitterIcon" />
        <span className="title">지금 일어나고 있는 일</span>
        <span className="subTitle">오늘 트위터에 가입하세요.</span>
        <button className="joinBtn">가입하기</button>
        <button className="loginBtn">로그인</button>
      </IndexContainer>
      <BannerStyle>
        <AiOutlineTwitter className="test" />
        <img src={indexBanner} alt="twitter" />
      </BannerStyle>
    </>
  );
};

export default IndexLayout;
