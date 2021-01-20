import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './question';
import token from '../../../config/config.js';

const QuestionList = (props) => {
  //console.log(props.productId);
  const [questions, setQuestions] = useState([]);
  function loadQuestionList(id) {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/questions?product_id=${id}`,
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then((res) => {
        //console.log(res.data.results);
        setQuestions(res.data.results);
      });
  }
  // useEffect(() => {
  //   loadQuestionList(props.productId);
  // });

  return (
    <div>
      <h6> hello from question list</h6>
      {questions.map((question) => {
        return <Question key={question.question_id} question={question} />;
      })}
    </div>
  );
};

export default QuestionList;
