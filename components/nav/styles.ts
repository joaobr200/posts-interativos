import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  padding: 8px;
  box-shadow: ${({ theme }) => theme.shadow};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.black};

  div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
