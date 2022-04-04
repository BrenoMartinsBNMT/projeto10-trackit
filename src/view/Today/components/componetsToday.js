import styled from "styled-components";

export const MainContentToday = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ReportToday = styled.div`
  position: absolute;
  top: 98px;
  left: 17px;
  .do-not-habbits {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }
`;
export const TextDate = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;

  color: #126ba5;
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
export const DivHabbitsReport = styled.div`
  position: relative;
  top: 177px;
  left: 18px;
  .true {
    background: #8fc549;
  }
`;
export const ReportIfDoHabbits = styled.div`
  display: flex;

  width: 340px;
  height: 94px;

  background: #ffffff;
  border-radius: 5px;
  div {
    margin-left: 15px;
  }
  button {
    position: relative;
    top: 13px;
    left: 100px;
    width: 69px;
    height: 69px;

    background: #ebebeb;
    border: 1px solid #e7e7e7;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;

export const TitleReport = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;

  color: #666666;
`;
export const CurrentSequence = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;

  color: #666666;
`;
export const HighestSequence = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;

  color: #666666;
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
