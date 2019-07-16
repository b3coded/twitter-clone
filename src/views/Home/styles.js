import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background: ${props => props.theme.background};
  padding: 1rem;
  padding: 1rem 200px;
`;

export const Button = styled.button`
  padding: 0.5rem 2rem;
  border: 1px solid ${props => props.theme.buttonTextColor};
  color: ${props => props.theme.buttonTextColor};
  background: ${props => props.theme.buttonDefaultColor};
  transition: 0.3s all;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 2rem;
  margin: 0.5rem;

  :hover {
    color: ${props => props.theme.buttonTextHoverColor};
    background: ${props => props.theme.buttonDefaultHoverColor};
  }
`;
