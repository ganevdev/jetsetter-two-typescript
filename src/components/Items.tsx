import React from 'react';

import Filter from './Filter';
import Item from './Item';

const Items = ({ title, items }) => {
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
