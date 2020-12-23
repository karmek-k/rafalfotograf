import React from 'react';
import { Col, Row } from 'react-bootstrap';

interface Props {
  category?: string;
  imgWidthUnit?: number;
  edges: any;
}

const ImageDisplay: React.FC<Props> = props => {
  return (
    <Row>
      {props.edges.map(
        ({ node }) =>
          (node.category.name === props.category || !props.category) && (
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
