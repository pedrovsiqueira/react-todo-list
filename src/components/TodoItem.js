import React from "react";

const TodoItem = () => {
  return (
      <div className="todo-item">
        <input type="checkbox" name="paragraph1" id="pg1" />
        <label htmlFor="paragraph1">This is my first paragraph checkbox</label>
        <br></br>
      </div>
  );
};

export default TodoItem;
