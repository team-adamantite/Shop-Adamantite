import React from 'react';
import { products } from './dummyData';
import axios from 'axios';
import { useDispatch, useSelector, connect } from 'react-redux';
import { changeCurrentProduct } from './store';

const Header = (props) => {
  // const product = useSelector((state) => state.currentProduct);
  // const dispatch = useDispatch();

  const handleChange = (e) => {
    const id = e.target.value;
    console.log('what is e', id);
    // setProductId(e.target.value);
    axios.get(`/proxy/api/fec2/hratx/products/${id}`).then((res) => {
      console.log(res.data, 'res data');
      props.changeProduct(res.data);
    });
  };
  return (
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light">Adamantite</a>
        <select
          id="dropdown-basic-button"
          title="Dropdown button"
          onChange={handleChange}
          value={props.product.id}
        >
          {products.map((product) => {
            return (
              <option value={product.id} key={product.id}>
                {product.name}
              </option>
            );
          })}
        </select>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

var mapStateToProps = (state) => ({
  product: state.currentProduct,
});

var mapDispatchToProps = (dispatch) => {
  return {
    changeProduct: (product) => dispatch(changeCurrentProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
