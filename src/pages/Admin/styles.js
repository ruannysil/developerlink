import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 6px 24px 6px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;

    label {
      color: #fff;
      margin-top: 8px;
      margin-bottom: 14px;
    }

    section {
      display: flex;
      gap: 22px;

      div {
        display: flex;
        margin: 14px 0;

        label {
          margin-right: 14px;
        }
      }
    }

    .preview {
      margin: 0 0 28px 0;
      padding: 4px;
      border: 1.4px solid rgba(255,255,255, 0.5);
      border-radius: 4px ;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    button {
      height: 36px;
      border-radius: 4px;
      background-color: #3366ff;
      border: 0;
      font-size: 18px;
      color: #fff;
      margin-bottom: 28px;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        margin-left: 8px;
      }
    }
  }

  h2 {
    color: #fff;
    margin: 28px 0 14px 0;
  }
`;

export const List = styled.article`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(256, 36, 36, 0.35);
  border-radius: 4px;
  padding: 14px 8px;
  margin-bottom: 14px;
  animation-duration: 0.5s;
  animation-name: animate-pop;

  @keyframes animate-pop {
    0% {
      opacity: 0;
      transform: scale(0.7, 0.7);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1);
    }
  }

  button {
    border: 1.5px dashed #fff;
    color: #fff;
    background-color: #000;
    padding: 4px 8px;
    border-radius: 2px;
  }
`;
