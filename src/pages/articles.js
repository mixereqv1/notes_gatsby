import React from 'react';
import { graphql } from 'gatsby';
import Card from '../components/molecules/Card/Card';
import UserPageTemplate from '../templates/UserPageTemplate';

const ArticlesPage = ({
  data: {
    allDatoCmsNote: { nodes, totalCount },
  },
}) => {
  return (
    <UserPageTemplate totalCount={totalCount}>
      {nodes.map(
        ({ originalId, title, articleLink, content, meta: { createdAt } }) => (
          <Card
            key={originalId}
            id={originalId}
            title={title}
            articleLink={articleLink}
            content={content}
            createdAt={createdAt}
            totalCount={totalCount}
          />
        )
      )}
    </UserPageTemplate>
  );
};

export const query = graphql`
  {
    allDatoCmsNote(filter: { pageType: { eq: "articles" } }) {
      nodes {
        originalId
        articleLink
        title
        content {
          paragraphContent
          id
        }
        meta {
          createdAt(formatString: "DD/MM/YYYY")
        }
      }
      totalCount
    }
  }
`;

export default ArticlesPage;
