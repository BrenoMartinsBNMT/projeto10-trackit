import styled from "styled-components";

export const MainContentToday = styled.div`
  width: 100vw;
  heigth: 100vh;
`;

export const NavToday = styled.nav`
  display: flex;
  position: absolute;
  top: 0px;
  width: 375px;
  height: 70px;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  p {
    margin-top: 10px;
    margin-left: 18px;
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    /* identical to box height */

    color: #ffffff;
  }
  img {
    position: absolute;
    top: 9px;
    right: 18px;
    width: 51px;
    height: 51px;

    border-radius: 100%;
  }
`;

export const FooterMenuToday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 375px;
  height: 70px;
  bottom: 0px;

  background: #ffffff;
  .sizeProgressBar {
    width: 91px;
    height: 91px;
    padding: 0px 10px 35px 10px;
  }
  button {
    background: inherit;

    border: none;
    outline: none;

    width: 84px;
    height: 35px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;

    text-align: center;

    color: #52b6ff;
  }
`;
