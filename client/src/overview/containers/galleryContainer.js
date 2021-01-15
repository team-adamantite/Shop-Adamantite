import {connect} from 'react-redux';
import gallery from '../components/gallery';

var mapStateToProps = (state) => (
  {styles: state.productStyles}
);

var galleryContainer = connect(mapStateToProps, null)(gallery);

export default galleryContainer;