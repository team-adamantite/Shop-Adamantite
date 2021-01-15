import React from 'react';
import { connect } from 'react-redux';
import QuestionList from './questionList';

const QA = (props) => {
  return (
    <div>
      <div>{props.product.id}</div>
      <QuestionList productId={props.product.id} />
    </div>
  );
};

//hey guys, the code following is what needed to make you component into a store.
var mapStateToProps = (state) => ({
  product: state.currentProduct,
});

var QAcontainer = connect(mapStateToProps, null)(QA);

export default QAcontainer;
