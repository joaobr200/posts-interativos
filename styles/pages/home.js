import styled from "styled-components";

export const Index = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div h1 {
    font-size: 72px;
    background: -webkit-linear-gradient(blueviolet, violet);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > div p {
    font-size: 26px;
    font-style: italic;
    line-height: 22px;
  }

  > svg {
    width: 400px;
    height: 400px;
    border-radius: 50%;
  }

  @media screen and (max-width: 748px) {
    text-align: center;
    > div {
      margin: 0 auto;
    }
    > svg {
      display: none;
    }
  }
`;

export const Timeline = styled.div`
  width: 100%;
  max-width: 820px;

  margin: 0 auto;
  padding: 20px;

  border-radius: 12px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.12);

  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    opacity: 0.9;
  }

  article + article {
    margin-top: 25px;
  }
`;

export const Posts = styled.article`
  width: 600px;
  display: flex;
  justify-content: space-between;

  > div {
    width: 100%;
  }

  > img {
    margin-right: 15px;
  }

  > div button {
    width: 120px;
    height: 36px;
    margin-top: 50px;
    border: none;
    border-radius: 12px;

    color: #fff;
    background: blueviolet;

    cursor: pointer;
  }

  @media screen and (max-width: 620px) {
    width: 100%;

    > div h1 {
      font-size: 18px;
    }

    > div p {
      font-size: 12px;
    }
  }
`;
