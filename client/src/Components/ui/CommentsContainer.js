import styled from '@emotion/styled';

export const CommentsContainer = styled.section`
  width: 60%;
  margin: 3rem auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.white};
  > div {
    border-radius: 0px;
    box-shadow: none;
    border-top: 1px solid ${({ theme }) => theme.lightGrey};
    border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  }
  @media screen and (max-width: 64em) {
    width: 100%;
    margin: 0;
    box-shadow: none;
  }
`;
