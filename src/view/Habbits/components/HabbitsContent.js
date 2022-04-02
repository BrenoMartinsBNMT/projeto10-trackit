import styled from "styled-components";

export const HabbitsMainContent = styled.div`
  width: 100vw;
  height: 100vh;
  p {
    margin-right: 20px;
    margin-left: 20px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
  #text-if-no-habbits {
    position: relative;
    top: 30px;
  }
`;

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputNewHabbits = styled.div`
  display: flex;
  flex-direction: column;

  width: 340px;
  height: 180px;

  background: #ffffff;
  border-radius: 5px;

  margin-left: 18px;
  .buttons-actions {
    width: 170px;
    position: relative;
    top: 58px;
    left: 148px;
  }
  .day-week {
    position: relative;
    top: 30px;
    left: 19px;
  }
  input {
    position: relative;
    top: 18px;
    left: 19px;

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
    width: 30px;
    height: 30px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #dbdbdb;
  }

  #cancelar {
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

  #salvar {
    width: 84px;
    height: 35px;

    background: #52b6ff;
    border-radius: 4.63636px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;

    text-align: center;

    color: #ffffff;
  }
`;

export const NavHabbits = styled.nav`
  display: flex;

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

export const AddNewHabbit = styled.div`
  display: flex;
  width: 100vw;
  margin: 28px 0px 22px 0px;
  justify-content: space-around;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;

    color: #126ba5;
  }
  button {
    border: none;
    outline: none;
    width: 40px;
    height: 35px;

    background: #52b6ff;
    border-radius: 4.63636px;
  }
  span {
    color: #ffffff;
  }
`;

export const MenuHabbits = styled.div``;
