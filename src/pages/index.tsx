import { graphql, PageProps } from 'gatsby';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Layout from '../components/layout';

export const query = graphql`
  {
    allDatoCmsPhoto {
      edges {
        node {
          id
          shortText
          photo {
            url
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps> = ({ data }: any) => {
  return (
    <Layout>
      <Row>
        {data.allDatoCmsPhoto.edges.map(({ node }) => (
          <Col sm={3} key={node.id}>
            <img
              src={node.photo.url}
              alt={node.shortText}
              style={{ maxWidth: '100%', padding: '1em' }}
            />
          </Col>
        ))}
      </Row>
    </Layout>
  );
};

export default IndexPage;
