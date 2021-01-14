import React, { Component } from 'react';
import Reviews from './ratings&reviews/components/Reviews';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='main'>
        {/* Placeholder for ProductOverview Component: */}
        <div className='container m-2'>
          <div className='card border-1 border-dark text-center py-3'>
            <h5 className='card-title'>Product Overview</h5>
          </div>
        </div>
        <Reviews />
        {/* Placeholder for Questions&Answers Component: */}
        <div className='container m-2'>
          <div className='card border-1 border-dark text-center py-3'>
            <h5 className='card-title'>Questions & Answers</h5>
          </div>
        </div>
        {/* Placeholder for RelatedItems&Comparison Component: */}
        <div className='container m-2'>
          <div className='card border-1 border-dark text-center py-3'>
            <h5 className='card-title'>Related Items & Comparison</h5>
          </div>
        </div>
      </div>
    );
  }
}
