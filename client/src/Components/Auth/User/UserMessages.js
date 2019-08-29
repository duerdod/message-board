import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { truncateMessage, addTimestamp } from '../../../utils/utils';
import { ReactComponent as Chevron } from '../../../svg/ChevronRight.svg';

const MessagesList = styled.ul`
  width: 100%;
  li {
    cursor: pointer;
    margin-bottom: 1rem;
    font-size: 0.85rem;
    opacity: 0.7;
    transition: opacity, background 0.4s ease;
    position: relative;
    padding: 1rem 0.5rem;
    &:hover {
      opacity: 1;
      background: ${({ theme }) => theme.color.white.tint[4]};
      svg {
        right: 0.7rem;
        transition: right 0.4s ease;
      }
    }
    svg {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

const MessageTitle = styled.h4`
  font-weight: 600;
`;
const MessageText = styled.p``;

const Timestamp = styled.p`
  color: ${({ theme }) => theme.color.grey.tint[4]};
`;

const UserMessages = ({ id, openTabId, messages }) => {
  return (
    openTabId === id && (
      <div>
        <MessagesList>
          {messages.map(({ message, title, id, date }) => {
            return (
              <li key={id}>
                <Link to={`/message/${id}`}>
                  <MessageTitle>{title}</MessageTitle>
                  <MessageText>
                    {message.length > 60
                      ? truncateMessage(message, 60)
                      : message}
                  </MessageText>
                  <Timestamp>{addTimestamp(date)}</Timestamp>
                  <Chevron></Chevron>
                </Link>
              </li>
            );
          })}
        </MessagesList>
      </div>
    )
  );
};

export default UserMessages;
