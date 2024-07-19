import React from 'react';

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }) => {
  const capitalizeFirstLetter = (string) => {
    if (typeof string !== "string" || !string.length) {
      return "";
    }
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <div
      className="col-md-2 bg-light p-3 vh-100 position-fixed d-none d-md-block"
      style={{ top: "55px", left: 0, overflowY: "auto" }}
    >
      <h4>Categories</h4>
      <ul className="list-group">
        {categories.map((category) => (
          <li key={category} className="list-group-item">
            <button
              className={`btn text-decoration-none text-dark btn-link ${
                selectedCategory === category ? "fw-bold" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {capitalizeFirstLetter(category)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
