import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onUpdateItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("packed");

  let sortedItems = [...items];

  console.log(sortedItems);
  if (sortBy === "desription") {
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  console.log(sortedItems);

  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((el) => (
          <Item
            key={el.id}
            item={el}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
            onClearItems={onClearItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortBy}
          onChange={(ev) => setSortBy(ev.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="desription">Sort by description</option>
          <option value="packed">By packed status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>
    </div>
  );
}
