import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Answer = ({ answer }) => {
  const [countHelpfulness, setCountHelpfulness] = useState(answer.helpfulness);
  const [report, setReport] = useState('Report');
  const [clicked, setClicked] = useState(false);

  //console.log(`what is answers`, question_id);

  function formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString(
      {},
      { timeZone: 'UTC', month: 'long', day: '2-digit', year: 'numeric' }
    );
    return formattedDate;
  }

  function handleHelpfulness() {
    if (clicked === false) {
      axios
        .put(
          `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/answers/${answer.id}/helpful`
        )
        .catch((err) =>
          console.log(`err from mark the answer as helpful`, err)
        );
      setCountHelpfulness(countHelpfulness + 1);
      setClicked(true);
    }
  }

  function handleReport() {
    setReport('Reported');
    axios
      .put(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/answers/${answer.id}/report`
      )
      .catch((err) => console.log(`err from report the answer`, err));
  }

  return (
    <React.Fragment>
      <span>
        <strong>A: {answer.body}</strong>
      </span>
      <div>
        <span className="poster">
          by{' '}
          {answer.answerer_name === 'Seller' ? (
            <strong>Seller</strong>
          ) : (
            answer.answerer_name
          )}
          , {formatDate(answer.date)}
        </span>
        <span>|</span>
        <span className="helper_bar">
          Helpful?
          <u onClick={handleHelpfulness}> Yes</u> ({countHelpfulness}) |
          <u onClick={handleReport}>{report}</u>
        </span>
      </div>

      {answer.photos.length > 0 &&
        answer.photos.map((url, index) => {
          return <img key={index} src={url} className="img-thumbnail" alt="" />;
        })}
    </React.Fragment>
  );
};

export default Answer;
