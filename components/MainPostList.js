import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiShareForward2Line } from "react-icons/ri";

import TestAvatar from "../public/j.jpg";

const PostListStyled = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 1.3rem 1rem;
  width: 100%;
  border-bottom: 1px solid #dde7e5;
  z-index: -1;

  & img {
    width: 50px;
    height: 46px;
    border-radius: 30px;
    /* margin-right: 0.7rem; */
  }

  .textContainer {
    font-size: 0.9rem;
    padding: 0 1rem;
    width: 100%;

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
  width: 100%;
  align-items: center;
  opacity: 0.6;
  justify-content: space-between;
  font-size: 1.1rem;
  margin-top: 0.9rem;

  .heartIcon {
    color: ${(props) => props.color || "black"};
  }
`;

const MainPostList = ({ post }) => {
  const [like, setLike] = useState(false);

  // const onClickLike = useCallback(() => {
  //   console.log("test");
  //   setLike((prev) => !prev);
  // }, []);

  const onClickLike = () => {
    console.log("test");
  };

  return (
    <PostListStyled>
      <img src={TestAvatar} alt="avatar" />
      <div className="textContainer">
        <span className="title">{post.User.nickname}</span>
        <span className="hour">1h</span>
        <div className="content">{post.content}</div>
        <PostListFunction>
          <IoChatbubbleOutline className="postIcon" />
          <AiOutlineRetweet className="postIcon" />
          {like ? (
            <IoIosHeartEmpty
              className="heartIcon"
              color="red"
              onClick={onClickLike}
            />
          ) : (
            <IoIosHeartEmpty className="heartIcon" onClick={onClickLike} />
          )}
          <RiShareForward2Line className="postIcon" />
        </PostListFunction>
      </div>
    </PostListStyled>
  );
};

export default MainPostList;
