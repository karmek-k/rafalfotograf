exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    {
      allDatoCmsPhoto {
        edges {
          node {
            category {
              href
            }
          }
        }
      }
    }
  `);

  data.allDatoCmsPhoto.edges.forEach(({ node }) => {
    if (node.category.href) {
      actions.createPage({
        path: node.category.href,
        component: require.resolve('./src/pages/index.tsx'),
        context: { hrefName: node.category.href }
      });
    }
  });
};
