import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categoryFilter, setCategory] = useState("All");
  const [lists, setList] = useState(TASKS);

  const filteredTasks = lists.filter(
    (listItem) =>
      listItem.category === categoryFilter || categoryFilter === "All"
  );

  const onClickClass = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

  const removeItem = (e) => {
    const updatedList = lists.filter((item) => item.text !== e.target.value);
    setList(updatedList);
  };

  const onTaskFormSubmit = (object) => {
    setList([...lists, object]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onClickClass={onClickClass}
        categoryFilter={categoryFilter}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} removeItem={removeItem} />
    </div>
  );
}

export default App;
