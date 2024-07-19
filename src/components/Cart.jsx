import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart, decreaseQuantity } from "../app/store";
  const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center"><FaShoppingCart /> Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div>
          <div className="row">
            {cart.map((product, index) => (
              <div key={index} className="col-12 mb-4">
                <div className="card h-100 flex-row">
                  <img
                    src={product.thumbnail}
                    className="card-img-left"
                    alt={product.title}
                    style={{ width: "150px", height: "auto" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <strong>${product.price}</strong>
                    </p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-secondary me-2"
                        onClick={() => handleDecreaseQuantity(product)}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        className="btn btn-secondary ms-2"
                        onClick={() => handleIncreaseQuantity(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-end">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
