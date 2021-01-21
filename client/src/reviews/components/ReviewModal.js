import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import HalfStarRating from './HalfStarRating';

const ReviewModal = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title>Write A Review</Modal.Title>
      </Modal.Header>
      <div className='d-flex justify-content-between align-items-center m-2'>
        <HalfStarRating value={0} />
      </div>
      <Modal.Body>Modal Form Fields</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose}>
          Submit Review
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewModal;
