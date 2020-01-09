import React from 'react';

import Filter from './Filter';
import Item, { IItem } from './Item';

const Items = ({ title, items }: { title: string; items: IItem[] }) => {
  return (
    <section className="Items">
      <h2>
        {title} ({items.length})
      </h2>
      <Filter searchTerm={''} onChange={() => {}} />
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Items;
