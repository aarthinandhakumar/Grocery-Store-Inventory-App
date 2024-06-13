import React, { useState, useEffect } from 'react';
import InventoryItem from './InventoryItem';
import inventoryData from '../data/inventory.json';

function InventoryList() { // This defines the InventoryList component
  const [items, setItems] = useState([]); // This initializes the state variable 'items' as an empty array

  useEffect(() => { // This effect runs once when the component mounts
    setItems(inventoryData);
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div className="inventory-list">
      {items.map(item => (
        <InventoryItem key={item.sku} sku={item.sku} name={item.name} qty={item.qty} />
      ))}
    </div>
  );
}

export default InventoryList; // This exports the InventoryList component for use in other files
