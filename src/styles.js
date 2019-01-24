import styled, { css, keyframes } from "styled-components";

const em = value => `${value / 16}em`;

const slideInDown = keyframes`
  0%,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
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
  padding-left: ${em(24)};

  & > svg {
    width: ${em(64)};
    ${props =>
      props.type === "success" &&
      css`
        fill: ${props => props.theme.iconSuccess};
      `}

    ${props =>
      props.type === "error" &&
      css`
        fill: ${props => props.theme.iconError};
      `}

    ${props =>
      props.type === "warning" &&
      css`
        fill: ${props => props.theme.iconWarning};
      `}
    }
`;

export const Content = styled.div`
  flex-grow: 1;
`;

export const ContentWrapper = styled.div`
  will-change: opacity, transform;
  display: flex;
  flex-direction: row;
  min-width: ${em(350)};
  margin: 16px;
  max-width: ${em(600)};
  border-radius: ${em(10)};
  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.36);
  animation: ${slideInDown} 0.6s linear;

  ${props =>
    props.type === "success" &&
    css`
      background-color: ${props => props.theme.backgroundSuccess};
    `}

  ${props =>
    props.type === "error" &&
    css`
      background-color: ${props => props.theme.backgroundError};
    `}

  ${props =>
    props.type === "warning" &&
    css`
      background-color: ${props => props.theme.backgroundWarning};
    `}
`;

export const TitleWrapper = styled.div`
  padding: ${em(24)} ${em(24)} ${em(16)};
  display: flex;
`;

export const Title = styled.h1`
  cursor: default;
  font-weight: 700;
  font-family: Roboto, sans-serif;
  font-size: ${em(40)};
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
  padding: 0px ${em(24)} ${em(20)};
  color: red;
`;

export const Message = styled.p`
  cursor: default;
  font-family: Roboto, sans-serif;
  font-size: ${em(18)};
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
  padding: ${em(8)};
  margin-left: ${em(5)};
  background: transparent;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  font-family: Roboto, sans-serif;
  font-size: ${em(16)};
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
