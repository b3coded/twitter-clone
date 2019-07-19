import React, { Fragment, Component } from "react";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { GlobalStyle } from "./global";

// Themes
export const dark = {
  background: "#15212B",
  primaryColor: "#FFF",
  secondaryColor: "",
  textColor: "#FFF",
  textMutedColor: "#ccccccff",
  buttonDefaultTextColor: "#FFF",
  buttonPrimaryTextColor: "#FFF",
  buttonPrimaryHoverTextColor: "#FFF",
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
  textMutedColor: "#ccccccff",
  buttonDefaultTextColor: "#15212BCC",
  buttonTextHoverColor: "#FFF",
  buttonPrimaryTextColor: "#FFF",
  buttonPrimaryHoverTextColor: "#FFF",
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
class AppTheme extends Component {
  render() {
    console.log(this.props);
    const { darkMode } = this.props.theme;
    const theme = darkMode ? dark : light;
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          {this.props.children}
        </Fragment>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme
});
export default connect(mapStateToProps)(AppTheme);
