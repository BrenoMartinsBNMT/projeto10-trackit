import styled from "styled-components";

export const LoginContent = styled.div`
  display: flex;
  position: absolute;
  top: 68px;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 25px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;

    color: #52b6ff;
  }
`;
export const LogoLogin = styled.img``;
export const LoginForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    padding-left: 12px;
    margin-bottom: 6px;

    width: 303px;
    height: 45px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
  }
  input::placeholder {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #dbdbdb;
  }
  button {
    border: none;
    outline: none;

    width: 303px;
    height: 45px;

    background: #52b6ff;
    border-radius: 4.63636px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #ffffff;
  }
`;
