import React, { Component, Suspense } from 'react';
const ProductRatings = React.lazy(() =>
  import('./reviews/components/ProductRatings')
);
// import ProductRatings from './reviews/components/ProductRatings';
const QAcontainer = React.lazy(() => import('./questions/components/main'));
const OverviewContainer = React.lazy(() =>
  import('./overview/components/overviewMain')
);
const RelatedOutfits = React.lazy(() =>
  import('./related-outfits/RelatedOutfits.js')
);

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='main'>
        <Suspense fallback={<div>Loading...</div>}>
          <OverviewContainer />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <RelatedOutfits />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <QAcontainer />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductRatings />
        </Suspense>
      </div>
    );
  }
}
