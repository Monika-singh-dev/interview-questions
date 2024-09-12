import React, { useState } from "react";

const Todo = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default Todo;
