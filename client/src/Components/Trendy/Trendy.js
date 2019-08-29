import React from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { GET_TAGS } from '../../gql/gql';
import StatusPage from '../StatusPage';

const Page = styled.div`
  margin-top: 1rem;
`;

const PageTitle = styled.h2`
  color: ${({ theme }) => theme.color.secondary.tint[2]};
  font-weight: 900;
  font-size: 1.2rem;
`;

const TagContainer = styled.ul``;

const Tag = styled.li`
  color: ${({ theme }) => theme.color.primary.tint[8]};
  font-weight: 200;
  display: inline-block;
  font-size: ${p => p.size}rem;
  margin-right: 0.5rem;
  opacity: 1;
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.color.primary.tint[9]};
  }
`;

const Trendy = ({ collapseMenu }) => {
  const { data, error, loading } = useQuery(GET_TAGS);
  if (loading) return <StatusPage state={loading && 'loading'} />;
  if (error) return <StatusPage state={error && 'error'} />;
  const { tags } = data;

  return (
    <Page>
      <PageTitle>Trending</PageTitle>
      <TagContainer>
        {tags.map(({ tag, count, id }) => (
          <Link
            key={id}
            to={`/messages/${tag.replace('#', '')}`}
            onClick={collapseMenu}
          >
            <Tag size={count === 0 ? 0.8 : (count / 2) % 3}>{tag}</Tag>
          </Link>
        ))}
      </TagContainer>
    </Page>
  );
};

export default Trendy;
