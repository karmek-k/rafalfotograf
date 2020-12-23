import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allDatoCmsCategory {
      edges {
        node {
          name
          locale
          href
        }
      }
    }
  }
`;

const LayoutNavbar: React.FC = () => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Navbar>
          <Container className="justify-content-between">
            <div>
              <Navbar.Brand>{data.site.siteMetadata.title}</Navbar.Brand>
            </div>
            <div>
              <Navbar.Toggle aria-controls="navbar-links" />
              <Navbar.Collapse id="navbar-links">
                <Nav>
                  {/* get all links from cms */}
                  {data.allDatoCmsCategory.edges.map(
                    ({ node }) =>
                      node.locale === 'pl' && (
                        // TODO: all locales
                        <Link
                          to={'/' + node.href}
                          key={node.name}
                          className="nav-link"
                        >
                          {node.name}
                        </Link>
                      )
                  )}
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      )}
    />
  );
};

export default LayoutNavbar;
