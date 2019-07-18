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
  FaEnvelope
} from "react-icons/fa";
import UI from "../UI";

const { Button } = UI;
class Navbar extends Component {
  state = {
    isActive: false
  };
  togleMenu = prevState => {
    this.setState({ isActive: !prevState });
  };
  render() {
    const { isActive } = this.state;

    console.log(this.state);
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

export default Navbar;
