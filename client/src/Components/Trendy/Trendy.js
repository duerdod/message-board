import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import StatusPage from '../StatusPage';

export const GET_TAGS = gql`
  query GET_TAGS {
    tags {
      id
      tag
      count
    }
  }
`;

const Page = styled.div``;

// const PageTitle = styled.h2`
//   /* text-align: center; */
//   color: ${({ theme }) => theme.color.primary.hex};
//   font-weight: 900;
//   font-size: 1.7rem;
// `;

const TagContainer = styled.ul`
  margin-top: 1rem;
`;

const Tag = styled.li`
  color: ${({ theme }) => theme.color.white.tint[1]};
  font-weight: 200;
  display: inline-block;
  font-size: ${p => p.size}rem;
  margin-right: 0.5rem;
  opacity: 0.6;
  transition: all 0.2s ease;
  &:hover {
    opacity: 1;
  }
`;

const Trendy = ({ collapseMenu }) => {
  const { data, error, loading } = useQuery(GET_TAGS);
  if (loading) return <StatusPage state={loading && 'loading'} />;
  if (error) return <StatusPage state={error && 'error'} />;
  const { tags } = data;

  return (
    <Page>
      {/* <PageTitle>Tr3ndie t4gs</PageTitle> */}
      <TagContainer>
        {tags
          .sort((first, second) => second.count - first.count)
          .map(
            ({ tag, count, id }, i) =>
              i < 20 && (
                <Link
                  key={id}
                  to={`/messages/${tag.replace('#', '')}`}
                  onClick={collapseMenu}
                >
                  <Tag size={count === 0 ? 0.8 : count / 2}>{tag}</Tag>
                </Link>
              )
          )}
      </TagContainer>
    </Page>
  );
};

export default Trendy;
