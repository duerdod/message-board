import styled from '@emotion/styled';

const MessagesGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  max-width: 800px;
  padding: 2rem;
  margin: 0 auto;
  transition: all 0.2s ease;
  &.expanded {
    grid-row: span 2;
  }

  ${p => p.theme.isMobile} {
    grid-template-columns: 1fr;
    grid-gap: 0rem;
    padding: 0rem;
    .message {
      box-shadow: none;
      border-radius: 0;
      border-top: 1px solid #f4f3f3;
    }
  }
`;

export default MessagesGrid;
