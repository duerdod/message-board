import React, { useState } from 'react';
import styled from '@emotion/styled';

import UserInformation from './UserInformation';
import UserMessages from './UserMessages';
import UserSavedMessage from './UserSavedMessages';

// Rewrite and move to UI. Can be used elsewhere.
const TabContainer = styled.section``;

const TabUpper = styled.div`
  margin: 2rem 0;
  h3 {
    cursor: pointer;
    padding: 0.5rem 2rem 0.5rem 0;
    text-transform: uppercase;
    font-size: 0.85rem;
    display: inline-block;
    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      background: ${({ theme }) => theme.color.secondary.tint[8]};
    }
    &.active {
      &::after {
        background: ${({ theme }) => theme.color.secondary.hex};
      }
    }
  }
  h3 {
    &:nth-last-of-type(-n + 2) {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
  ${p => p.theme.isMobile} {
    text-align: center;
  }
`;

const TabLower = styled.div``;

const TabTitle = ({ onClick, id, className }) => {
  return (
    <h3
      className={className}
      aria-label="Cchange tab"
      onClick={onClick}
      data-tab-id={id}
    >
      {id}
    </h3>
  );
};

const Tabs = ({ currentUser }) => {
  const [openTab, setTabOpen] = useState({
    id: 'profile'
  });

  const toggleTab = e => {
    const { tabId } = e.target.dataset;
    setTabOpen({ id: tabId });
  };

  return (
    <TabContainer>
      <TabUpper>
        <TabTitle
          id="profile"
          onClick={toggleTab}
          className={'profile' === openTab.id ? 'active' : ''}
        >
          Profile
        </TabTitle>
        <TabTitle
          id="my messages"
          onClick={toggleTab}
          className={'my messages' === openTab.id ? 'active' : ''}
        >
          My messages
        </TabTitle>
        <TabTitle
          onClick={toggleTab}
          id="favorites"
          className={'favorites' === openTab.id ? 'active' : ''}
        >
          Favorites
        </TabTitle>
        <TabTitle
          id="settings"
          className={'settings' === openTab.id ? 'active' : ''}
        >
          Settings
        </TabTitle>
      </TabUpper>
      <TabLower>
        <UserInformation
          currentUser={currentUser}
          openTabId={openTab.id}
          id="profile"
        />
        <UserMessages
          messages={currentUser.messages}
          openTabId={openTab.id}
          id="my messages"
        />
        <UserSavedMessage openTabId={openTab.id} id="favorites" />
      </TabLower>
    </TabContainer>
  );
};

export default Tabs;
