import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  margin-bottom: 70px;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 3;

  border-bottom: 1px solid var(--gray);
  background-color: ${(props) => props.color};

  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  display: flex;
  justify-self: flex-end;
  margin-left: auto;
  position: relative;

  color: #333;

  > svg {
    transform: translateY(3.5px);
    margin-right: 10px;
  }

  span {
    margin-left: 5px;
  }
`;

export const StyledSpan = styled.span`
  padding-left: 10px;
  font-size: 20px;
`;

export const Items = styled.div`
  border-radius: 100%;
  padding: 4px 8px;
  background-color: red;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  z-index: 2;
  right: 3px;
  top: -3px;
`;

export const BackgroundModal = styled.div`
  position: absolute;
  /* width: ${() => `${document.scrollingElement.scrollWidth - 3}px`}; */
  width: 99vw;
  height: ${({ openToggleMenu }) =>
    `${document.scrollingElement.offsetHeight}px`};
  visibility: ${({ openToggleMenu }) =>
    openToggleMenu ? "visible" : "hidden"};
  background-color: ${({ openToggleMenu }) =>
    openToggleMenu ? "rgb(0, 0, 0, 0.5)" : "rgb(255, 255, 255, 0)"};
  transition: 0.2s;
`;

export const ToggleMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ openToggleMenu }) => (openToggleMenu ? "30vw" : "0vw")};
  height: ${() => `${document.scrollingElement.offsetHeight}px`};
  visibility: ${({ openToggleMenu }) =>
    openToggleMenu ? "visible" : "hidden"};
  background: rgba(181, 181, 177, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.2s;
  z-index: 2;
  color: #fff;

  display: flex;
  flex-direction: column;

  .first-child {
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 20px 15px;
  }

  .second-child {
    width: auto;
    height: 20vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 15px;
    flex-direction: column;
  }

  .third-child {
    width: auto;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    a {
      display: block;
      /* width: 100%; */
      text-align: center;
      border-bottom: 1px solid var(--gray);
      color: #fff;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 800px) {
    width: ${({ openToggleMenu }) => (openToggleMenu ? "60vw" : "0vw")};
  }
`;

export const ToggleMenuLink = styled(Link)`
  font-size: 30px;
  color: black;
  &:hover {
    color: gray;
    transition: 0.1s;
  }
`;
