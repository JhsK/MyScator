import React from "react";
import styled from "styled-components";

const StyledWirteForm = styled.form`
  border-bottom: 1px solid #dde7e5;
  margin-bottom: 1rem;
  padding: 1.3rem 1rem;
  width: 100%;

  & textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid #dde7e5;
    outline: none;
    font-size: 1.2rem;
    color: #93a1ad;
    font-weight: bold;
  }

  .submitContainer {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    justify-content: space-between;

    .imgBtn {
      border: 1px solid #1da1f2;
      background-color: #fff;
      color: #1da1f2;
    }

    .TweetBtn {
      background-color: #1da1f2;
      color: #fff;
      border-radius: 20px;
      border: none;
      outline: none;
      padding: 0.8rem 1rem;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`;

const MainPostWrite = () => {
  return (
    <StyledWirteForm encType="multipart/form-data">
      <textarea
        name="writeContent"
        wrap="physical"
        placeholder="오늘은 무슨일이?"
      />
      <div className="submitContainer">
        <input type="file" hidden />
        <button className="imgBtn">업로드</button>
        <button type="submit" className="TweetBtn">
          Tweet
        </button>
      </div>
    </StyledWirteForm>
  );
};

export default MainPostWrite;
