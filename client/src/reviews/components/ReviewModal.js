import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Modal, Form, Button } from 'react-bootstrap';
import FormContainer from './FormContainer';
import AddStarRating from './AddStarRating';

import { addProductReview } from '../reviewActions/productReviewsActions';

const ReviewModal = ({
  meta,
  show,
  handleClose,
  id,
  sortType,
  setSortType
}) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  const [summary, setSummary] = useState('');
  const [recommended, setRecommended] = useState(false);
  const [userRating, setUserRating] = useState(1);
  // let data = {
  //   product_id: id,
  //   rating: userRating,
  //   photos: []
  // };
  let characteristics = {};

  const updateCharacteristics = (e) => {
    characteristics[e.target.name] = { id: e.target.id, value: e.target.value };
  };

  const handleSubmit = () => {
    console.log(`
        product_id: ${id},
        rating: ${userRating},
        reviewer_name: 'Adamantite',
        date: ${moment().format('YYYY-MM-DD')},
        summary: ${summary},
        body: ${comment},
        helpfulness: ${0},
        recommend: ${recommended},
        characteristics: ${characteristics}
      `);

    // let data = {
    //   product_id: id,
    //   rating: userRating,
    //   summary,
    //   body: comment,
    //   recommend: recommended,
    //   name: 'Adamantite',
    //   email: 'adamant@gmail.com',
    //   // date: moment().format('YYYY-MM-DD'),
    //   photos: [],
    //   characteristics
    // };

    // console.log(data);

    // dispatch(addProductReview(data));
    // setSortType(sortType);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Write A Review: </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormContainer className='justify-content-left'>
          <div className='d-flex justify-content-between'>
            <AddStarRating
              value={0}
              onClick={(e) => setUserRating(e.target.value)}
            />
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
              <Form.Check
                type='checkbox'
                label='I recommend this product'
                onClick={(e) => setRecommended((prevState) => !prevState)}
              />
            </Form.Group>
          </Form.Group>
          <Form.Group controlId='characteristics'>
            <Form.Label>Characteristics: </Form.Label>
            {Object.keys(meta.characteristics).map((characteristic) => (
              <div key={characteristic}>
                <Form.Group
                  required
                  feedback='Required'
                  onChange={(e) => updateCharacteristics(e)}
                >
                  <Form.Label className='d-block'>{characteristic}</Form.Label>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Form.Check
                      key={rating + meta.characteristics[characteristic].id}
                      inline
                      name={characteristic}
                      value={String(rating.toFixed(3))}
                      id={meta.characteristics[characteristic].id}
                      type={'radio'}
                      label={rating}
                    />
                  ))}
                </Form.Group>
                <br />
              </div>
            ))}
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
