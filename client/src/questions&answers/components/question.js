import React from 'react';

export default function question(props) {
  return (
    <div>
      <div>{props.question.question_id}</div>
      <div>{props.question.question_body}</div>
    </div>
  );
}
