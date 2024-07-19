import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const NavigationBar = ({ searchQuery, setSearchQuery }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Cart App
        </Link>
        <button
          className="navbar-toggler m-md-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse  navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item">
              <input
                type="text"
                className="form-control"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/liked-products">
                <FaHeart /> Liked Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FaShoppingCart /> Cart 
              </Link>
              {/* ({cart.length}) */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
