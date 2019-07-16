import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.dividerColor};
`;

export const Brand = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.theme.primaryColor};

  svg {
    margin-right: 0.5rem;
  }
`;

export const MenuItem = styled.div``;

export const MenuButton = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid ${props => props.theme.buttonPrimaryColor};
  color: ${props => props.theme.buttonTextColor};
  background: ${props => {
    if (props.primary) return props.theme.buttonPrimaryColor;
    else return props.theme.buttonDefaultColor;
  }};
  transition: 0.3s all;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 2rem;

  :hover {
    color: ${props => props.theme.buttonTextHoverColor};
    background: ${props => props.theme.buttonDefaultHoverColor};
  }
`;
