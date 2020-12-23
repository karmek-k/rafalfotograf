import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import styles from './styles/galleryImage.module.css';

export interface Props {
  imgUrl: string;
  text: string;
}

const GalleryImage: React.FC<Props> = props => {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      {/* image */}
      <img
        src={props.imgUrl}
        alt={props.text}
        className={styles.galleryImage}
        onClick={() => setOpened(true)}
      />

      {/* modal */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={opened}
        onHide={() => setOpened(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.text}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.imgUrl}
            alt={props.text}
            className={styles.modalImage}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GalleryImage;
