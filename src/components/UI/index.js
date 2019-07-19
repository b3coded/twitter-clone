import styled from "styled-components";

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.textColor};
`;

const Divider = styled.hr`
  border-bottom: 1px solid ${({ theme }) => theme.dividerColor};
`;

const Button = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.buttonPrimaryColor};
  color: ${({ theme, primary }) => {
    if (primary) return theme.buttonPrimaryTextColor;
    else return theme.buttonDefaultTextColor;
  }};
  background: ${({ theme, primary }) => {
    if (primary) return theme.buttonPrimaryColor;
    else return theme.buttonDefaultColor;
  }};
  transition: 0.3s all;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 2rem;
  margin: 0.5rem;
  margin-right: 0;
  width: ${props => (props.block ? "-webkit-fill-available" : "fit-content")};

  :hover {
    background: ${({ theme, primary }) => {
      if (primary) return theme.buttonPrimaryColor;
      else return theme.buttonDefaultColor;
    }};
  }
`;

export default {
  Button,
  Divider
};
