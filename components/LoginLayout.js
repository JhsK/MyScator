import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { AiOutlineTwitter } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

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
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
      cursor: pointer;
    }

    & a {
      color: #fff;
    }
  }

  .loginFooter {
    text-align: center;
    font-size: 0.9rem;
    cursor: pointer;

    & a {
      color: #1da1f2;
    }
  }
`;

const LoginLayout = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePw = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(loginAction(id));
    },
    [id, password]
  );

  return (
    <LoginStyle>
      <AiOutlineTwitter className="twitterIcon" />
      <span className="loginTitle">트위터 로그인</span>
      <form onSubmit={onSubmitForm}>
        <input
          placeholder="휴대폰, 이메일, 사용자 아이디"
          type="text"
          required
          onChange={onChangeId}
        />
        <input
          placeholder="비밀번호"
          type="password"
          required
          onChange={onChangePw}
        />
        <button type="submit">로그인</button>
      </form>
      <span className="loginFooter">
        <Link href="/join">
          <a>비밀번호를 잊으셨나요? · 트위터 가입</a>
        </Link>
      </span>
    </LoginStyle>
  );
};

export default LoginLayout;
