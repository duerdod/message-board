import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as MenuBell } from '../../../svg/Bell.svg';

const Text = styled.h2`
  color: #${p => p.color};
  font-size: ${p => p.size}rem;
  margin: 0;
  font-weight: 900;
`;

const Bell = styled(MenuBell)`
  fill: ${({ theme }) => theme.lightRed};
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
      <Text size="1.7" color="fcc6c9">
        PRESS THE BELL <Bell />
      </Text>
      <Text size="1.3" color="f4f3f3">
        IF YO DISAGREE
      </Text>
      <Text size="1.4" color="fcc6c9">
        MESSAGES WITH FIVE
      </Text>
      <Text size="2" color="fcc6c9">
        BELLS
      </Text>
      <Text size="1.3" color="f4f3f3">
        WILL BE REMOVED
      </Text>
    </div>
  );
};

export default Information;
