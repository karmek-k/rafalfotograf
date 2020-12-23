import React from 'react';
import { Col, Row } from 'react-bootstrap';
import GalleryImage from './galleryImage';

interface Props {
  hrefName?: string;
  sm?: number;
  md?: number;
  lg?: number;
  edges: any;
}

const ImageDisplay: React.FC<Props> = props => {
  const sizeDefaults = {
    sm: 6,
    md: 4,
    lg: 3
  };

  return (
    <Row>
      {props.edges.map(
        ({ node }) =>
          (node.category.href === props.hrefName || !props.hrefName) && (
            <Col
              sm={props.sm || sizeDefaults.sm}
              md={props.md || sizeDefaults.md}
              lg={props.lg || sizeDefaults.lg}
              key={node.id}
            >
              <GalleryImage imgUrl={node.photo.url} text={node.shortText} />
            </Col>
          )
      )}
    </Row>
  );
};

export default ImageDisplay;
