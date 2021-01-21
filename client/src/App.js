import React, { Component } from 'react';
import ProductRatings from './reviews/components/ProductRatings';

import QAcontainer from './questions/components/main';
import OverviewContainer from './overview/components/overviewMain';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='main'>
        <OverviewContainer />
        <QAcontainer />
        <ProductRatings />
      </div>
    );
  }
}
