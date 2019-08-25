import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as MenuBell } from '../../../svg/Bell.svg';

const Text = styled.h2`
  color: ${p => p.theme.color[p.color].hex};
  font-size: ${p => p.size}rem;
  margin: 0;
  font-weight: 900;
`;

const Bell = styled(MenuBell)`
  fill: ${p => p.theme.color.yellow};
  stroke: none;
  width: 1.5rem;
  transition: all 0.2s ease;
  &:hover {
    fill: ${({ theme }) => theme.white};
  }
`;

const Information = () => {
  return (
    <div>
      <Text size="1.7" color="primary">
        PRESS THE BELL <Bell />
      </Text>
      <Text size="1.3" color="white">
        IF YO DISAGREE
      </Text>
      <Text size="1.4" color="white">
        MESSAGES WITH FIVE
      </Text>
      <Text size="2" color="white">
        BELLS
      </Text>
      <Text size="1.3" color="primary">
        REMOVIZESES
      </Text>
    </div>
  );
};

export default Information;
