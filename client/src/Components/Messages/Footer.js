import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FiUmbrella } from 'react-icons/fi';

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 0.5rem;
  background: ${({ theme }) => theme.lightGrey};

  > * {
    font-size: 0.75rem;
  }
`;

const DislikeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  line-height: 12px;
  cursor: pointer;
`;

const Dislikees = styled.span`
  margin-right: 3px;
`;

const Footer = () => {
  const [dislikes, dislike] = useState(0);
  return (
    <Container>
      <DislikeContainer onClick={() => dislike(dislikes => dislikes + 1)}>
        <Dislikees>{dislikes}</Dislikees>
        <FiUmbrella />
      </DislikeContainer>
    </Container>
  );
};

export default Footer;
