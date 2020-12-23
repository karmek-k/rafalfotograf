import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* TODO: Make this depend on locale */}
      <h1>Nie znaleziono strony</h1>
    </Layout>
  );
};

export default NotFoundPage;
