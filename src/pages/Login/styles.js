import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    padding: 0 8px;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 600px;

      svg {
        color: #000;
        position: relative;
        /* right: -10.9em; */
        left: 94%;
        top: -2.5em;
        cursor: pointer;
      }
    }

    > button {
      height: 36px;
      border-radius: 4px;
      background-color: #3366ff;
      border: 0;
      font-size: 18px;
      color: #fff;
    }
  }

  @media (max-width: 375px) {
    form {
      div {
        svg {
          left: 90%;
        }
      }
    }
  }
`;
