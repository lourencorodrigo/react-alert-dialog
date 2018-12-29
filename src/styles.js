import styled, { css, keyframes } from "styled-components";

import success from "./assets/success.png";
import error from "./assets/error.png";
import warning from "./assets/warning.png";

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 16px 0 46px;
`;

export const Content = styled.div`
  background-repeat: no-repeat;
  will-change: opacity;
  display: flex;
  flex-direction: column;
  min-width: 350px;
  margin: 16px;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 0 35px 0 rgba(82, 82, 82, 0.25);
  background-position: right top;
  animation: ${fade} 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  ${props =>
    props.type === "success" &&
    css`
      background-color: ${props => props.theme.backgroundSuccess};
      background-image: url(${success});
    `}

  ${props =>
    props.type === "error" &&
    css`
      background-color: ${props => props.theme.backgroundError};
      background-image: url(${error});
    `}

  ${props =>
    props.type === "warning" &&
    css`
      background-color: ${props => props.theme.backgroundWarning};
      background-image: url(${warning});
    `}
`;

export const TitleWrapper = styled.div`
  padding: 24px 24px 16px;
  display: flex;

  & > svg {
    fill: white;
    padding-right: 16px;
  }
`;

export const Title = styled.h1`
  cursor: default;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  font-size: 40px;
  margin: 0;

  ${props =>
    props.type === "success" &&
    css`
      color: ${props => props.theme.titleSuccess};
    `}

  ${props =>
    props.type === "error" &&
    css`
      color: ${props => props.theme.titleError};
    `}

  ${props =>
    props.type === "warning" &&
    css`
      color: ${props => props.theme.titleWarning};
    `}
`;

export const MessageWrapper = styled.div`
  padding: 0px 24px 20px;
  color: red;
`;

export const Message = styled.p`
  cursor: default;
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 100;
  margin: 0;

  ${props =>
    props.type === "success" &&
    css`
      color: ${props => props.theme.messageSuccess};
    `}

  ${props =>
    props.type === "error" &&
    css`
      color: ${props => props.theme.messageError};
    `}

  ${props =>
    props.type === "warning" &&
    css`
      color: ${props => props.theme.messageWarning};
    `}
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px;
`;

export const Button = styled.button`
  padding: 8px;
  margin-left: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: normal;

  &:hover,
  :focus {
    background: ${props => props.theme.buttonFocus};
    border-radius: 3px;
  }

  ${props =>
    props.type === "success" &&
    css`
      color: ${props => props.theme.buttonSuccess};
    `}

  ${props =>
    props.type === "error" &&
    css`
      color: ${props => props.theme.buttonError};
    `}

  ${props =>
    props.type === "warning" &&
    css`
      color: ${props => props.theme.buttonWarning};
    `}

  ${props =>
    props.weight === "bold" &&
    css`
      font-weight: bold;
    `}
`;
