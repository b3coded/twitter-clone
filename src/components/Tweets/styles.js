import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  grid-area: tweets;
  margin: 1rem 0;
`;

export const Tweet = styled.li`
  color: ${({ theme }) => theme.primaryColor};
  border-top: 1px solid ${({ theme }) => theme.dividerColor};
  padding: 1rem 0.5rem;
  display: flex;
  margin-top: 0.5rem;
`;

export const ProfilePic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export const Content = styled.div`
  flex: 1;
  padding: 0.25rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
`;

export const UserName = styled.span`
  margin-left: 0.25rem;
  color: ${({ theme }) => theme.textMutedColor};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.textColor};
`;

export const Controls = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;

  @media screen and (min-width: 767px) {
    justify-content: flex-start;
  }
`;

export const Control = styled.button`
  background: transparent;
  border: none;
  margin: 0 1rem;
  color: ${({ theme }) => theme.textColor};
  @media screen and (min-width: 767px) {
    margin: 0.5rem 3rem;
  }
`;
