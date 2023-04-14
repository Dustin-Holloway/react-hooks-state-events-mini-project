import React from "react";

function CategoryFilter({ categoryFilter, categories, onClickClass }) {
  const categoryButton = categories.map((item) => (
    <button
      onClick={onClickClass}
      key={item}
      value={item}
      className={item === categoryFilter ? "selected" : ""}
    >
      {item}
    </button>
  ));
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
