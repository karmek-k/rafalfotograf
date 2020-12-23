import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import ImageDisplay from '../components/imageDisplay';

export const query = graphql`
  {
    allDatoCmsPhoto {
      edges {
        node {
          id
          shortText
          category {
            href
          }
          photo {
            url
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps> = ({ data, pageContext }: any) => {
  return (
    <Layout>
      <ImageDisplay
        edges={data.allDatoCmsPhoto.edges}
        hrefName={pageContext.hrefName}
      />
    </Layout>
  );
};

export default IndexPage;
