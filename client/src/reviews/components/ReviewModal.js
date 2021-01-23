import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import FormContainer from './FormContainer';
import AddStarRating from './AddStarRating';

const ReviewModal = ({ show, handleClose }) => {
  const [comment, setComment] = useState('');
  const [summary, setSummary] = useState('');

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Write A Review: </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormContainer className='justify-content-left'>
          <div className='d-flex justify-content-between'>
            <AddStarRating value={0} />
          </div>
          <Form.Group controlId='summary'>
            <Form.Label>Review Summary: </Form.Label>
            <Form.Control
              as='textarea'
              style={{ width: '100%', height: '80px' }}
              row='3'
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='comment'>
            <Form.Label>Please Comment on Product: </Form.Label>
            <Form.Control
              as='textarea'
              style={{ width: '100%', height: '100px' }}
              row='4'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></Form.Control>
            <Form.Group controlId='formBasicCheckbox' className='py-2'>
              <Form.Check type='checkbox' label='I recommend this product' />
            </Form.Group>
          </Form.Group>
        </FormContainer>
      </Modal.Body>
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
