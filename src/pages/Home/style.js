import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px 0;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 14px;
    color: #fff;
    font-size: 44px;
    padding-top: 94px;
  }

  span {
    color: #f1f1f1;
    margin-bottom: 18px;
  }

  main {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 90%;
    text-align: center;

    section {
      background-color: #ffff;
      width: 100%;
      margin-bottom: 18px;
      padding: 8px 0;
      user-select: none;
      border-radius: 4px;
      transition: transfrom 0.4s;

      &:hover {
        transform: scale(1.04);
      }

      a {
        font-size: 18px;
        line-height: 150%;
        color: #000;
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;
    gap: 14px;
    margin: 18px 0;
  }

  @media (max-width: 550px) {
    h1 {
      font-size: 30px;
      text-align: center;
    }

    main {
      section {
        a {
          font-size: 16px;
        }
      }
    }
  }
`;
