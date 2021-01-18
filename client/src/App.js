import React, { Component } from 'react';
import ProductRatings from './reviews/components/ProductRatings';
import QAcontainer from './questions/components/main';
import OverviewContainer from './overview/components/OverviewMain';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="main">
        {/* Placeholder for ProductOverview Component: */}
        <div className="container m-2">
          <div className="card border-1 border-dark text-center py-3">
            <h5 className="card-title">Product Overview</h5>
            <OverviewContainer />
          </div>
        </div>
        <ProductRatings />
        {/* Placeholder for Questions Component: */}

        <QAcontainer />

        {/* Placeholder for RelatedItems&Comparison Component: */}
        <div className="container m-2">
          <div className="card border-1 border-dark text-center py-3">
            <h5 className="card-title">Related Items & Comparison</h5>
          </div>
        </div>
      </div>
    );
  }
}
