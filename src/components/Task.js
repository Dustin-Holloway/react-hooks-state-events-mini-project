import React from "react";

function Task({ text, category, removeItem }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={removeItem} value={text}>
        X
      </button>
    </div>
  );
}

export default Task;
