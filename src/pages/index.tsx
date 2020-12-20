import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Hello, world!</h1>
    </Layout>
  );
};

export default IndexPage;
