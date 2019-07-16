import React from "react";
import { Header, Brand, MenuButton } from "./styles";
import { FaTwitter } from "react-icons/fa";

const Navbar = (itemActive = 0) => (
  <Header>
    <Brand href="/">
      <FaTwitter size={30} /> Twitter Clone
    </Brand>
    <MenuButton primary>Cadastre-se</MenuButton>
  </Header>
);

export default Navbar;
