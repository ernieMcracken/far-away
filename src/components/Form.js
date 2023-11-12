import { useState } from "react";

export default function Form({ items, onAddItem }) {
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);

  function handleSubmit(ev) {
    //stop page reload on page submission
    ev.preventDefault();

    if (!itemDescription) return;

    const newItem = {
      id: new Date().getTime(),
      description: itemDescription,
      quantity: itemQuantity,
      packed: false,
    };

    onAddItem(newItem);

    setItemDescription("");
    setItemQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😎</h3>
      <div className="form-inputs">
        <select
          value={itemQuantity}
          onChange={(e) => {
            setItemQuantity(Number(e.target.value));
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={itemDescription}
          onChange={(e) => {
            setItemDescription(e.target.value);
          }}
          placeholder="Item..."
        />
        <button>Add</button>
      </div>
    </form>
  );
}
