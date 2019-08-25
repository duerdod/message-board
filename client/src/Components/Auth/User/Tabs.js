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
      background: ${({ theme }) => theme.black};
    }
    &.active {
      &::after {
        background: rgba(238, 156, 167, 1);
      }
    }
  }
`;

const TabLower = styled.div``;

const TabTitle = ({ onClick, id, className }) => {
  return (
    <h3 className={className} onClick={onClick} data-tab-id={id}>
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
          id="messages"
          onClick={toggleTab}
          className={'messages' === openTab.id ? 'active' : ''}
        >
          Messages
        </TabTitle>
        <TabTitle
          id="saved-messages"
          onClick={toggleTab}
          className={'saved' === openTab.id ? 'active' : ''}
        >
          Saved Messages
        </TabTitle>
        <TabTitle
          id="settings"
          onClick={toggleTab}
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
          id="messages"
        />
        <UserSavedMessage openTabId={openTab.id} id="saved-messages" />
      </TabLower>
    </TabContainer>
  );
};

export default Tabs;
