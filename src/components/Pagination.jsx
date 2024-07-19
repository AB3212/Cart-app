import React from 'react';

const Pagination = ({ currentPage, pageNumbers, setCurrentPage }) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center mb-3 p-5">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button
              onClick={() => setCurrentPage(number)} 
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
