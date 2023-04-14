import React from "react";
import Task from "./Task";

function TaskList({ tasks, removeItem }) {
  const taskList = tasks.map((item) => (
    <Task
      key={item.text}
      text={item.text}
      category={item.category}
      removeItem={removeItem}
    />
  ));

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
