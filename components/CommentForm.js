import React, { useCallback, useState } from "react";
import styled from "styled-components";

const CommentStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.5rem;

  & textarea {
    width: 300px;
    height: 100px;
    resize: none;
    padding: 0rem 1rem;
    border-right: 1px solid #000;
  }

  & button {
    width: 100px;
    height: 30px;
  }
`;

const CommentForm = ({ post }) => {
  const [commentText, setCommentText] = useState("");
  const onChangeComment = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);
  const onSubmitComment = useCallback(
    (e) => {
      e.preventDefault();
      console.log(post.id, commentText);
    },
    [commentText]
  );

  return (
    <CommentStyled onSubmit={onSubmitComment}>
      <textarea onChange={onChangeComment} />
      <button type="submit">Reply</button>
    </CommentStyled>
  );
};

export default CommentForm;
