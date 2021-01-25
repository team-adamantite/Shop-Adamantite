import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import Question from './question';

const QA = ({ product }) => {
  const [questions, setQuestions] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [count, setCount] = useState(2);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    body: '',
    name: '',
    email: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleInputChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function handleInputSubmit(e) {
    e.preventDefault();
    if (inputs.body === '') {
      alert('You must enter your question before sumbitting');
    }
    if (inputs.name === '') {
      alert('You must enter your nickname before sumbitting');
    }
    if (Object.values(inputs).includes('') === false) {
      const postObj = { ...inputs, product_id: product.id };
      axios
        .post(`/proxy/api/fec2/hratx/qa/questions`, postObj)
        .then((res) => {
          alert(`Congrats! Your question has been posted!`);
        })
        .catch((err) => console.log(`err from posting a question`, err));
    }
  }
  function loadQuestionList(id) {
    axios
      .get(`/proxy/api/fec2/hratx/qa/questions?product_id=${id}&count=50`)
      .then((res) => {
        const questionList = res.data.results
          .slice()
          .sort((a, b) => b.question_helpfulness - a.question_helpfulness);
        setQuestions(questionList);
        setAllQuestions(questionList);
      });
  }

  useEffect(() => {
    loadQuestionList(product.id);
  }, []);

  function handleClickLoadMore() {
    if (count === 2) {
      setCount(questions.length);
    } else {
      setCount(2);
    }
  }

  function handleSearchInput(e) {
    if (e.target.value.length >= 3) {
      var filteredQuestions = allQuestions.filter((question) => {
        if (question.question_body.includes(e.target.value)) {
          return question;
        }
      });
      // console.log(`what is filtered question`, filteredQuestions);
      setQuestions(filteredQuestions);
    } else {
      setQuestions(allQuestions);
    }
  }
  return (
    <div id="question_body">
      <h3 className="title">QUESTIONS &amp; ANSWERS </h3>
      <input
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS"
        type="text"
        className="form-control"
        onChange={handleSearchInput}
      />
      {questions.length === 0 && (
        <p>No search results, create your own question!</p>
      )}
      {questions.length > 0 &&
        questions.slice(0, count).map((question) => {
          return (
            <Question
              question={question}
              key={question.question_id}
              name={product.name}
            />
          );
        })}

      {questions.length > 0 && (
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleClickLoadMore}
        >
          More Answered Questions
        </button>
      )}
      <>
        <Button variant="outline-primary" onClick={handleShow}>
          Add a Question
        </Button>

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
                * Ask Your Question About The <mark>{product.name}</mark>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="addQuestion.ControlTextarea1">
                <Form.Label>* Your Question</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="write your question here..."
                  name="body"
                  value={inputs.body}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="addQuestion.ControlInput1">
                <Form.Label>* What is your nickname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="example: Jackson11!"
                  name="name"
                  value={inputs.name}
                  onChange={handleInputChange}
                />
                <Form.Text muted>
                  For privacy reasons, do not use your full name or email
                  address
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="addQuestion.ControlInput2">
                <Form.Label>* Your email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Why did you like the product or not"
                  name="email"
                  value={inputs.email}
                  onChange={handleInputChange}
                />
                <Form.Text muted>
                  For authentication reasons, you will not be emailed
                </Form.Text>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="outline-success" type="submit" value="Submit">
                Submit question
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    </div>
  );
};

//hey guys, the code following is what needed to make you component into a store.
var mapStateToProps = (state) => ({
  product: state.currentProduct,
});

var QAcontainer = connect(mapStateToProps, null)(QA);

export default QAcontainer;
