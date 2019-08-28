import styled from '@emotion/styled';

const MaxWidth = styled.main`
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
  position: relative;
  ${p => p.theme.isMobile} {
    padding: 0;
  }
`;

export default MaxWidth;
