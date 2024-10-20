import React from 'react';

export const ListShow = ({ categories, onCategoryClick }) => {
  return (
    <>
      <ul className="list-group list-group-horizontal   bg-dark py-2">
        {categories.map(category => (
          <button
            key={category}
            className="btn btn-outline-secondary mx-2 text-white"
            onClick={() => onCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </ul>

    </>
  );
};
