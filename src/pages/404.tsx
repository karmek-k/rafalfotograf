import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
    </Layout>
  );
};

export default NotFoundPage;
