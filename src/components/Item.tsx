import React from 'react';

export interface IItem {
  id: string;
  packed: boolean;
  value: string;
}

const Item = ({ item }: { item: IItem }) => {
  return (
    <article className="Item">
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {}}
          id={item.id}
        />
        {item.value}
      </label>
      <button className="Item-remove" onClick={() => {}}>
        Remove
      </button>
    </article>
  );
};

export default Item;
