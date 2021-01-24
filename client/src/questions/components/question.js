import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Answer from './answer';
import { Modal, Button, Form } from 'react-bootstrap';

export default function Question({ question, name }) {
  const [count, setCount] = useState(2);
  const [answers, setAnswers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(false);
  const [countHelpfulness, setCountHelpfulness] = useState(
    question.question_helpfulness
  );
  const [inputs, setInputs] = useState({
    body: '',
    name: '',
    email: '',
    photos: [],
  });

  function sortAnswers(answers) {
    var result = Object.values(answers);
    result.sort((a, b) => {
      if (a.answerer_name === 'Seller') {
        return -1;
      }
      if (b.answerer_name === 'Seller') {
        return 1;
      }
      return b.helpfulness - a.helpfulness;
    });
    return result;
  }

  function handleHelpfulCount() {
    if (clicked === false) {
      setCountHelpfulness(countHelpfulness + 1);
      axios
        .put(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${question.question_id}/helpful`
        )
        .catch((err) => console.log(`err from mark question as helpful`, err));
      setClicked(true);
    }
  }

  useEffect(() => {
    const answers = sortAnswers(question.answers);
    setAnswers(answers);
  }, []);

  //following function for add an answer modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handleInputChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }
  function fileSelectedHandler(e) {
    // console.log('what is e.target.files?', e.target.files);
    setInputs({ ...inputs, photos: [...e.target.files] });
  }
  function handleInputSubmit(e) {
    e.preventDefault();
    // console.log(`what is inputs now`, inputs);
    if (Object.values(inputs).includes('')) {
      alert(
        'Dear customer, you must fill out all required inputs before submitting'
      );
    } else {
      axios
        .post(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions/${question.question_id}/answers`,
          inputs
        )
        .then((res) => alert(`you have successfully post your answers`))
        .catch((err) => console.log(`err from post an answer`, err));
    }
  }

  function fileUploadHandler(e) {
    //handle multiple input files upload
    const fd = new FormData();
    fd.append('image', inputs.photos[0], inputs.photos[0].name);
    // setInputs here for the photos
  }
  return (
    <div className="question_box">
      <div className="row">
        <div className="col-sm-8">
          <strong>Q: {question.question_body}</strong>
        </div>

        <div className="col-sm-4">
          Helpful? <u onClick={handleHelpfulCount}> Yes</u> ({countHelpfulness})
          |
          <>
            <button
              type="button"
              className="btn btn-link btn-sm"
              onClick={handleShow}
            >
              Add an Answer
            </button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Form onSubmit={handleInputSubmit}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Submit Your Answer for <mark>[{name}]</mark>: [
                    <mark>{question.question_body}</mark>]
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Group controlId="addAnswer.ControlTextarea1">
                    <Form.Label>* Your Answer</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="write your Answer here..."
                      name="body"
                      value={inputs.body}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="addAnswer.ControlInput1">
                    <Form.Label>* What is your nickname</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="example: Jackson543!"
                      name="name"
                      value={inputs.name}
                      onChange={handleInputChange}
                    />
                    <Form.Text muted>
                      For privacy reasons, do not use your full name or email
                      address
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="addAnswer.ControlInput2">
                    <Form.Label>* Your email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Example: jack@email.com"
                      name="email"
                      value={inputs.email}
                      onChange={handleInputChange}
                    />
                    <Form.Text muted>
                      For authentication reasons, you will not be emailed
                    </Form.Text>
                  </Form.Group>
                  <input type="file" onChange={fileSelectedHandler} multiple />
                  <button onClick={fileUploadHandler}>Upload</button>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="outline-secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    variant="outline-success"
                    type="submit"
                    value="Submit"
                  >
                    Submit answer
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal>
          </>
        </div>
      </div>

      {answers.slice(0, count).map((answer) => {
        return (
          <Answer
            key={answer.id}
            answer={answer}
            question_id={question.question_id}
          />
        );
      })}
      {answers.length > count && (
        <button
          type="button"
          className="btn btn-link btn-sm"
          onClick={() => setCount(answers.length)}
        >
          see more answers
        </button>
      )}
    </div>
  );
}
