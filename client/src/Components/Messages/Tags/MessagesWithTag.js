import React from 'react';
import styled from '@emotion/styled';
import Messages from '../Messages';

const Title = styled.h2`
  text-align: center;
  margin: 1rem;
  font-size: 1.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.grey.hex};
  text-transform: uppercase;
  span {
    color: ${({ theme }) => theme.color.secondary.hex};
    font-weight: 900;
    letter-spacing: 1px;
  }
`;

const MessagesWithTag = props => {
  const { tag } = props.match.params;
  return (
    <div>
      <Title>
        All <span>#{tag}</span> messages
      </Title>
      <Messages tag={tag} />
    </div>
  );
};

export default MessagesWithTag;
