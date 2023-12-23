import React, { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    onSubmit(newItem);
    // setTodos((currentTodos) => [
    //   ...currentTodos,
    //   { id: crypto.randomUUID(), title: newItem, completed: false },
    // ]);
    setNewItem("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Todo Application</label>
          <input
            onChange={(event) => setNewItem(event.target.value)}
            value={newItem}
            type="text"
            id="item"
          />
          <button className="btn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default NewTodoForm;
