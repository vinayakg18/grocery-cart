// src/components/SelectedList.js
import React from 'react';

const SelectedList = ({ selectedItems }) => {
  return (
    <div>
      <h2>Selected Items</h2>
      <ul>
        {selectedItems.map(item => (
          <li key={item.id}>{item.name}   { item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedList;