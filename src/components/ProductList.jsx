import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/store';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={product.id}>
          <div className="card h-100">
            <img
              src={product.thumbnail}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <strong>${product.price}</strong>
              </p>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
