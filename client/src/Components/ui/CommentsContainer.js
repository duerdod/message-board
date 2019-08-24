import styled from '@emotion/styled';

export const CommentsContainer = styled.section`
  max-width: 650px;
  margin: 0 auto;
  position: relative;
  padding: 1rem;
  > div {
    border-radius: 0px;
    box-shadow: none;
    border-top: 1px solid ${({ theme }) => theme.lightGrey};
    border-right: 1px solid ${({ theme }) => theme.lightGrey};
    border-left: 1px solid ${({ theme }) => theme.lightGrey};
  }
  /* @media screen and (max-width: 64em) {
    width: 100%;
    margin: 0;
    box-shadow: none;
  } */
`;
