import React from 'react';
import styled from '@emotion/styled';
import config from '../../config';
import { IoIosArrowDown } from 'react-icons/io';

const ReadMore = styled.button`
  font-size: 0.65rem;
  background: transparent;
  outline: 0;
  border: 0;
  color: #799797;
  display: block;
  cursor: pointer;
  grid-area: readmore;
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.dark};
    transform: scale(1.2);
  }
`;

const StyledArrow = styled(IoIosArrowDown)`
  ${p =>
    p.isExapanded &&
    `
    transform: rotate(0.5turn)
`}
`;

const ReadMoreButton = ({
  messageLength,
  handleClick,
  isContainerExpanded,
  isExapanded,
  id,
  clickedMessageId
}) => {
  return messageLength >= config.messageTruncateLength ? (
    <ReadMore onClick={() => handleClick(true, id)}>
      {isContainerExpanded(isExapanded, id, clickedMessageId) ? (
        <StyledArrow isExapanded={true} />
      ) : (
        <StyledArrow />
      )}
    </ReadMore>
  ) : null;
};

export default ReadMoreButton;
