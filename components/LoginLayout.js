import React from "react";
import styled from "styled-components";
import { AiOutlineTwitter } from "react-icons/ai";

const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.7rem;

  .twitterIcon {
    padding-top: 1.5rem;
    font-size: 3rem;
    color: #1da1f2;
  }

  .loginTitle {
    font-weight: bold;
    font-size: 2rem;
    margin: 1.2rem 0;
  }

  form {
    display: flex;
    flex-direction: column;

    & input {
      padding: 1rem 0.5rem;
      margin-bottom: 1.3rem;
      border-radius: 5px;
      border: 1px solid #c4cfd6;
      font-size: 1rem;
    }

    & button {
      background-color: #1da1f2;
      border-radius: 20px;
      outline: none;
      font-weight: bold;
      padding: 0.8rem 0;
      border: none;
      opacity: 0.5;
      color: #fff;
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
    }
  }

  .loginFooter {
    text-align: center;
    font-size: 0.9rem;
    color: #1da1f2;
  }
`;

const LoginLayout = () => {
  return (
    <LoginStyle>
      <AiOutlineTwitter className="twitterIcon" />
      <span className="loginTitle">트위터 로그인</span>
      <form>
        <input placeholder="휴대폰, 이메일, 사용자 아이디" type="text" />
        <input placeholder="비밀번호" type="text" />
        <button>로그인</button>
      </form>
      <span className="loginFooter">비밀번호를 잊으셨나요? · 트위터 가입</span>
    </LoginStyle>
  );
};

export default LoginLayout;
