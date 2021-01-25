import React, { Component, Suspense, Fragment } from 'react';
import Loader from './Loader';
const Header = React.lazy(() => import('./Header'));
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
      <Fragment>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Header />
        </Suspense>
        <div id="main">
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <OverviewContainer />
          </Suspense>
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <RelatedOutfits />
          </Suspense>
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <QAcontainer />
          </Suspense>
          {/* <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <ProductRatings />
          </Suspense> */}
        </div>
      </Fragment>
    );
  }
}
