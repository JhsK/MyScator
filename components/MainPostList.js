import React from "react";
import styled from "styled-components";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiShareForward2Line } from "react-icons/ri";

import TestAvatar from "../public/j.jpg";

const PostListStyled = styled.div`
  position: relative;
  display: flex;
  align-items: flex-flex-start;
  padding: 4.2rem 1rem 1rem 1rem;
  width: 100%;
  border-bottom: 1px solid #dde7e5;
  z-index: -1;

  & img {
    width: 100px;
    height: 46px;
    border-radius: 30px;
    /* margin-right: 0.7rem; */
  }

  .textContainer {
    font-size: 0.9rem;
    padding: 0 1rem;

    .title {
      font-weight: bold;
      margin-right: 0.5rem;
    }
    .hour {
      opacity: 0.6;
    }
    .content {
      margin-top: 0.5rem;
    }
  }
`;

const PostListFunction = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.6;
  justify-content: space-between;
  font-size: 1.1rem;
  margin-top: 0.7rem;

  .postIcon {
    cursor: pointer;
  }
`;

const MainPostList = () => {
  return (
    <PostListStyled>
      <img src={TestAvatar} alt="avatar" />
      <div className="textContainer">
        <span className="title">올더케이팝</span>
        <span className="hour">1h</span>
        <div className="content">
          오직 주간아에서만 볼 수 있는 팬스티벌 아이돌을 향한 여러분의 찐 팬심을
          100초 영상에 담아 보내주세요
        </div>
        <PostListFunction>
          <IoChatbubbleOutline className="postIcon" />
          <AiOutlineRetweet className="postIcon" />
          <IoIosHeartEmpty className="postIcon" />
          <RiShareForward2Line className="postIcon" />
        </PostListFunction>
      </div>
    </PostListStyled>
  );
};

export default MainPostList;
