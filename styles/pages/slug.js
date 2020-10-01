import styled from "styled-components";

export const Post = styled.article`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  background: #fff;
  border-radius: 12px;

  margin-top: 60px;

  > img {
    width: 250px;
  }
`;

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px;

  div:nth-child(1) {
    display: flex;
    align-items: center;

    img {
      width: 36px;
      height: 36px;
      margin-right: 15px;
    }
  }

  div:nth-child(2) {
    p {
      font-weight: 500;
    }
  }

  @media screen and (max-width: 748px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
