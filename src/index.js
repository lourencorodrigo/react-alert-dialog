import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { SvgSuccess, SvgError, SvgWarning } from "./icons";

import {
  Wrapper,
  Content,
  ContentWrapper,
  TitleWrapper,
  MessageWrapper,
  Title,
  Message,
  Footer,
  Button,
  IconWrapper
} from "./styles";
import { dark, light } from "./theme";

const themes = {
  dark,
  light
};

const removeElementDialog = () => {
  const target = document.getElementById("react-dialog-alert");
  unmountComponentAtNode(target);
  target.parentNode.removeChild(target);
};

class Dialog extends React.Component {
  close() {
    removeElementDialog();
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

  keyboardClose(event) {
    if (event.keyCode === 27) {
      this.close();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyboardClose, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyboardClose, false);
    this.props.willUnmount();
  }

  handleClickButton(button) {
    if (button.onClick) button.onClick();
    this.close();
  }

  render() {
    const { title, message, buttons, theme, type, hideIcons } = this.props;
    return (
      <ThemeProvider theme={themes[theme]}>
        <Wrapper onClick={this.close}>
          <ContentWrapper type={type} onClick={this.stopPropagation}>
            {!hideIcons && (
              <IconWrapper type={type}>
                {type === "success" && <SvgSuccess />}
                {type === "error" && <SvgError />}
                {type === "warning" && <SvgWarning />}
              </IconWrapper>
            )}

            <Content>
              <TitleWrapper>
                <Title type={type}>{title}</Title>
              </TitleWrapper>
              <MessageWrapper>
                <Message type={type}>{message}</Message>
              </MessageWrapper>
              <Footer>
                {buttons.map((button, index) => (
                  <Button
                    type={type}
                    key={index}
                    onClick={() => this.handleClickButton(button)}
                    weight="bold"
                    autoFocus={button.focus}
                  >
                    {button.label}
                  </Button>
                ))}
              </Footer>
            </Content>
          </ContentWrapper>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const createElementDialog = options => {
  let divTarget = document.getElementById("react-dialog-alert");
  if (divTarget) {
    render(<Dialog {...options} />, divTarget);
  } else {
    divTarget = document.createElement("div");
    divTarget.id = "react-dialog-alert";
    document.body.appendChild(divTarget);
    render(<Dialog {...options} />, divTarget);
  }
};

export const showDialog = options => {
  createElementDialog(options);
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  hideIcons: PropTypes.bool,
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
  buttons: PropTypes.array.isRequired,
  willUnmount: PropTypes.func,
  theme: PropTypes.string
};

Dialog.defaultProps = {
  theme: "dark",
  type: "success",
  hideIcons: false,
  buttons: [
    {
      label: "Cancel",
      onClick: () => null
    },
    {
      label: "Confirm",
      onClick: () => null
    }
  ],
  willUnmount: () => null
};

export default Dialog;
