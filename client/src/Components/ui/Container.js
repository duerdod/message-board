import styled from '@emotion/styled';

export const Container = styled.section`
  max-width: 650px;
  margin: 0 auto;
  position: relative;
  padding: 1rem;
  > div {
    background: ${({ theme }) => theme.color.white.tint[6]};
    border-radius: 0px;
    box-shadow: none;
  }
`;
