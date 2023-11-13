// src/components/ItemList.js
import React, { useState } from 'react';

const ItemList = ({ items, onItemSelect }) => {
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} onClick={() => onItemSelect(item)}>
            {item.name} { item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
