import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  padding: 0.5rem 2rem;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
`;

export const Brand = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryColor};
  width: fit-content;

  svg {
    margin-right: 0.5rem;
  }
`;

export const MenuToggle = styled.button`
  padding: 0.5rem 0.5rem 0.1rem 0.5rem;
  border: 1px solid ${({ theme }) => theme.buttonPrimaryColor};

  color: ${({ theme }) => theme.textColor};
  background: transparent;
  transition: 0.3s all;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  margin: 0.25rem;
  margin-right: 0;
  width: fit-content;
  height: fit-content;

  @media only screen and (min-width: 767px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  right: ${({ isActive }) => (isActive ? 0 : "-100vw")};
  top: 0;
  height: 100vh;
  transition: 0.3s all;
  @media only screen and (min-width: 767px) {
    position: inherit;
    width: unset;
    flex: 1;
    height: auto;
  }
`;

export const MenuOverlay = styled.div`
  background: rgba(0, 0, 0, 0.1);
  flex: 1;
`;
export const MenuItems = styled.div`
  padding: 1rem;
  width: 220px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.background};
  justify-content: space-between;
  align-items: flex-end;
  text-align: right;

  @media only screen and (min-width: 767px) {
    width: -webkit-fill-available;
    display: -webkit-box;
    padding: 0;
    padding-left: 3rem;
  }
`;
export const MenuItem = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.primaryColor};
  margin: 2rem 0.5rem;
  font-size: 1.4rem;

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg {
      margin-left: 0.5rem;
    }
  }

  @media only screen and (min-width: 767px) {
    margin: 0.5rem;
    font-size: 1.1rem;
    a {
      flex-direction: row-reverse;

      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;
export const Body = styled.div`
  @media only screen and (min-width: 767px) {
    display: flex;

    align-items: center;
  }
`;
export const Footer = styled.div`
  @media only screen and (min-width: 767px) {
    display: flex;
    align-items: center;
  }
`;

export const MenuButton = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid ${({ theme }) => theme.buttonPrimaryColor};
  color: ${({ theme }) => theme.buttonTextColor};
  background: ${props => {
    if (props.primary) return props.theme.buttonPrimaryColor;
    else return props.theme.buttonDefaultColor;
  }};
  transition: 0.3s all;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 2rem;

  :hover {
    color: ${({ theme }) => theme.buttonTextHoverColor};
    background: ${({ theme }) => theme.buttonDefaultHoverColor};
  }
`;
