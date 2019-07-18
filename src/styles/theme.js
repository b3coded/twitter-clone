import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global";

// Themes
export const dark = {
  background: "#15212B",
  primaryColor: "#FFF",
  secondaryColor: "",
  textColor: "#FFF",
  buttonTextColor: "#FFF",
  buttonTextHoverColor: "#15212B",
  buttonDefaultColor: "transparent",
  buttonDefaultHoverColor: "#FFF",
  buttonDefaultActiveColor: "#FFF",
  buttonDefaultFocusColor: "#F5F5F5",
  buttonPrimaryColor: "#1DA1F2",
  buttonPrimaryHoverColor: "#1DA1F2",
  buttonPrimaryActiveColor: "#1DA1F2",
  buttonPrimaryFocusColor: "#1DA1F2",
  dividerColor: "#ffffff12"
};

export const light = {
  background: "#FFF",
  primaryColor: "#1DA1F2",
  secondaryColor: "",
  textColor: "#15212B",
  buttonTextColor: "#15212B",
  buttonTextHoverColor: "#FFF",
  buttonDefaultColor: "transparent",
  buttonDefaultHoverColor: "#FFF",
  buttonDefaultActiveColor: "#FFF",
  buttonDefaultFocusColor: "#F5F5F5",
  buttonPrimaryColor: "#1DA1F2",
  buttonPrimaryHoverColor: "#1DA1F2",
  buttonPrimaryActiveColor: "#1DA1F2",
  buttonPrimaryFocusColor: "#1DA1F2",
  dividerColor: "#00000012"
};

// Styles init
const AppTheme = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default AppTheme;
