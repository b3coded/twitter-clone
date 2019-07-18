import styled from "styled-components";

const Divider = styled.hr`
  border-bottom: 1px solid ${props => props.theme.dividerColor};
`;
const Button = styled.button`
  padding: 0.5rem 1.5rem;
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
  margin: 0.5rem;
  margin-right: 0;
  width: ${props => (props.block ? "-webkit-fill-available" : "fit-content")};

  :hover {
    color: ${props => props.theme.buttonTextHoverColor};
    background: ${props => props.theme.buttonDefaultHoverColor};
  }
`;

export default {
  Button,
  Divider
};
