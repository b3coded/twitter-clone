import React, { Component } from "react";

import {
  Header,
  Brand,
  MenuToggle,
  Menu,
  MenuOverlay,
  MenuItems,
  MenuItem,
  Body,
  Footer
} from "./styles";
import {
  FaTwitter,
  FaBars,
  FaHome,
  FaSearch,
  FaBell,
  FaEnvelope,
  FaLightbulb,
  FaRegLightbulb
} from "react-icons/fa";
import UI from "../UI";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as themeActions from "../../redux/actions/theme";

const { Button } = UI;
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  changeTheme = () => {
    const { changeTheme, theme } = this.props;
    const { darkMode } = theme;
    changeTheme({ darkMode: !darkMode });
  };

  togleMenu = prevState => {
    this.setState({ isActive: !prevState });
  };
  render() {
    console.log(this.props);
    const { isActive } = this.state;

    const { darkMode } = this.props.theme;

    return (
      <Header>
        <Brand href="/">
          <FaTwitter size={30} /> Twitter Clone
        </Brand>

        <Menu isActive={isActive}>
          <MenuOverlay onClick={() => this.togleMenu(isActive)} />
          <MenuItems>
            <Body>
              <MenuItem>
                <a href="/">
                  Home
                  <FaHome />
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/">
                  Pesquisar
                  <FaSearch />
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/">
                  Notificações
                  <FaBell />
                </a>
              </MenuItem>
              <MenuItem>
                <a href="/">
                  Mensagens
                  <FaEnvelope />
                </a>
              </MenuItem>
            </Body>
            <Footer>
              <Button onClick={() => this.changeTheme()}>
                {darkMode ? <FaLightbulb /> : <FaRegLightbulb />}
              </Button>
              <Button>Entrar</Button>
              <Button primary>Cadastre-se</Button>
            </Footer>
          </MenuItems>
        </Menu>

        <MenuToggle onClick={() => this.togleMenu(isActive)}>
          <FaBars size={30} />
        </MenuToggle>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(themeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
