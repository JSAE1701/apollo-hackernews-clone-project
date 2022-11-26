import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const LINKS_QUERY = gql`
query {
    links {
      id
      url
      description
      postedBy {
        username
      }
    }
  }`

const LinkList = () => {
  const { data } = useQuery(LINKS_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.links.map((link) => (
            <Link key={link.id} link={link} postedBy={link.postedBy.username} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;