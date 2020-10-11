import styled from "styled-components";

interface Checked {
  checked: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 60px;
  height: 25px;

  padding: 0 5px;

  border-radius: 12px;
  background: #1c1c1c;
  box-shadow: ${({ theme }) => theme.shadow};

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

export const Circle = styled.div<Checked>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ checked }) => (checked ? "35px" : "0")};

  transition: all 0.2s ease;

  &.checked:hover {
    box-shadow: 0 0 5px 0 yellow;
  }

  &.unchecked:hover {
    box-shadow: 0 0 5px 0 blue;
  }
`;
