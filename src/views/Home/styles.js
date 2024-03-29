import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-template-areas: "newtweet" "destaques" "tweets";

  background-color: ${({ theme }) => theme.background};
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.dividerColor};

  @media only screen and (min-width: 767px) {
    grid-gap: 20px;
    margin: 1rem 200px;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "newtweet destaques"
      "tweets destaques";

    grid-auto-flow: dense;
  }
`;

export const NewTweet = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: newtweet;
  padding-right: 1rem;

  textarea {
    margin-top: 0.5rem;
    flex: 1;
    padding: 1rem;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
    border: 1px solid ${({ theme }) => theme.primaryColor};
    border-radius: 0.5rem;
    resize: none;
  }
  button {
    align-self: flex-end;
  }
`;
