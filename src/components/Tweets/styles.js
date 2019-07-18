import styled from "styled-components";

export const List = styled.ul`
  grid-area: tweets;
`;

export const Tweet = styled.li`
  color: ${props => props.theme.primaryColor};
`;
