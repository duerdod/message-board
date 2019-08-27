import React from 'react';
import styled from '@emotion/styled';
import Messages from '../Messages';

const Title = styled.h2`
  color: ${({ theme }) => theme.color.primary.hex};
  font-weight: 900;
  text-align: center;
  margin: 1rem;
  font-size: 1.7rem;
  letter-spacing: 2px;
`;

const MessagesWithTag = props => {
  const { tag } = props.match.params;

  return (
    <div>
      <Title>#{tag}</Title>
      <Messages tag={tag} />
    </div>
  );
};

export default MessagesWithTag;
