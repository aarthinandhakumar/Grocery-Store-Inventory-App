import React from 'react';
import { Link } from 'react-router-dom';
// InventoryItem component represents a single item in the inventory list
function InventoryItem({ sku, name, qty }) {
  return (
    // Link component to navigate to the detailed product page
    <Link to={`/product/${sku}`} className="inventory-item">
      <div>
        <h2>{name}</h2>
        <p>SKU: {sku}</p>
        <p>Quantity: {qty}</p>
      </div>
    </Link>
  );
}

export default InventoryItem;