import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiShareForward2Line } from "react-icons/ri";

import TestAvatar from "../public/avatar.png";
import CommentForm from "./CommentForm";
import PostImage from "./PostImage";
import PostContent from "./PostContent";

const PostListStyled = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 1.3rem 1rem;
  width: 100%;
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
  justify-content: space-around;
  font-size: 1.1rem;
  margin-top: 0.5rem;
  border-bottom: 1px solid #dde7e5;
  padding: 0rem 1rem 1rem 1rem;

  .heartIcon {
    color: ${(props) => props.color || "black"};
  }
`;

const CommentCount = styled.div`
  padding: 0rem 3rem 0.5rem 1rem;
  border-bottom: 1px solid #dde7e5;
  width: 100%;
`;

const MainPostList = ({ post }) => {
  const [like, setLike] = useState(false);
  const [commentState, setCommentState] = useState(false);

  const onToggleLike = useCallback((e) => {
    setLike((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentState((prev) => !prev);
  }, []);

  return (
    <>
      {post.Images[0] && <PostImage images={post.Images} />}
      <PostListStyled>
        <img src={TestAvatar} alt="avatar" />
        <div className="textContainer">
          <span className="title">{post.User.nickname}</span>
          <span className="hour">1h</span>
          <div className="content">
            <PostContent postData={post.content} />
          </div>
        </div>
      </PostListStyled>
      <PostListFunction>
        <IoChatbubbleOutline className="postIcon" onClick={onToggleComment} />
        <AiOutlineRetweet className="postIcon" />
        {like ? (
          <IoIosHeartEmpty
            className="heartIcon"
            color="red"
            onClick={onToggleLike}
          />
        ) : (
          <IoIosHeartEmpty className="heartIcon" onClick={onToggleLike} />
        )}
        <RiShareForward2Line className="postIcon" />
      </PostListFunction>
      {commentState && (
        <div>
          <CommentForm post={post} />
          <CommentCount>{post.Comments.length}개의 댓글</CommentCount>
          {post.Comments.map((v) => (
            <PostListStyled>
              <img src={TestAvatar} alt="avatar" />
              <div className="textContainer">
                <span className="title">{v.User.nickname}</span>
                <span className="hour">1h</span>
                <div className="content">{v.content}</div>
              </div>
            </PostListStyled>
          ))}
        </div>
      )}
    </>
  );
};

export default MainPostList;
