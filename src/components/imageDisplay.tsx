import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface Props {
  hrefName?: string;
  imgWidthUnit?: number;
  edges: any;
}

const ImageDisplay: React.FC<Props> = props => {
  return (
    <Row>
      {props.edges.map(
        ({ node }) =>
          (node.category.href === props.hrefName || !props.hrefName) && (
            <Col sm={props.imgWidthUnit || 3} key={node.id}>
              <img
                src={node.photo.url}
                alt={node.shortText}
                style={{ maxWidth: '100%', padding: '1em' }}
              />
            </Col>
          )
      )}
    </Row>
  );
};

export default ImageDisplay;
