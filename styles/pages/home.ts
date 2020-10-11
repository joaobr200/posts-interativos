import styled from "styled-components";

export const Index = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:nth-child(1) {
    width: 400px;
  }

  > div p {
    font-size: 22px;
    font-style: italic;
    line-height: 22px;
  }

  > svg {
    width: 400px;
    height: 400px;
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

export const Heading = styled.h1`
  font-size: 72px;
  background: -webkit-linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secundary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 748px) {
    font-size: 62px;
  }
`;
