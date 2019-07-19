import styled from "styled-components";

export const DestaquesContainer = styled.ul`
  grid-area: destaques;
  margin: 1rem 0;
`;

export const Destaque = styled.li`
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
  border-top: 1px solid ${({ theme }) => theme.dividerColor};
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;

  small {
    color: ${({ theme }) => theme.textMutedColor};
  }
`;

export const Title = styled.h3`
  font-weight: 700;
`;
