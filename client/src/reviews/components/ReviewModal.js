import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import FormContainer from './FormContainer';
import AddStarRating from './AddStarRating';

const ReviewModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Write A Review: </Modal.Title>
      </Modal.Header>
      <div className='d-flex justify-content-between align-items-center m-2'>
        <AddStarRating value={0} />
      </div>
      <Modal.Body>
        <FormContainer>
          <Form.Group controlId='comment'>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as='textarea'
              row='3'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </FormContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleSubmit}>
          Submit Review
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewModal;
