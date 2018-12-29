import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import {
  Wrapper,
  Content,
  TitleWrapper,
  MessageWrapper,
  Title,
  Message,
  Footer,
  Button
} from "./styles";
import { dark, light } from "./theme";

const themes = {
  dark,
  light
};

const removeElementDialog = () => {
  const target = document.getElementById("react-alert-dialog");
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
    const { title, message, buttons, theme, type } = this.props;
    return (
      <ThemeProvider theme={themes[theme]}>
        <Wrapper onClick={this.close}>
          <Content type={type} onClick={this.stopPropagation}>
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
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const createElementDialog = options => {
  let divTarget = document.getElementById("react-alert-dialog");
  if (divTarget) {
    render(<Dialog {...options} />, divTarget);
  } else {
    divTarget = document.createElement("div");
    divTarget.id = "react-alert-dialog";
    document.body.appendChild(divTarget);
    render(<Dialog {...options} />, divTarget);
  }
};

export const showDialog = options => {
  createElementDialog(options);
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
  buttons: PropTypes.array.isRequired,
  willUnmount: PropTypes.func,
  theme: PropTypes.string
};

Dialog.defaultProps = {
  theme: "dark",
  type: "success",
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
