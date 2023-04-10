import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 100%;
  max-width: 720px;
  margin-top: 14px;
  padding: 0 14px;

  nav {
    width: 100%;
    background-color: #fff;
    height: 48px;
    display: flex;
    align-items: center;
    border-radius: 4px;
  }

  button {
    border: 0;
    background-color: transparent;
    margin-right: 24px;
    margin-left: 8px;
  }
  a {
    margin-right: 14px;
    color: #21242d;
    transition: color 0.2s;

    &:hover {
      color: #eda617;
    }
  }
`;
