import React from 'react';
import { Link, useParams } from 'react-router-dom';
import inventoryData from '../data/inventory.json';

function ProductDetail() {
  // Extract SKU parameter from URL
  const { sku } = useParams();

  // Find product in inventory data based on SKU
  const product = inventoryData.find(item => item.sku === sku);

  // If product not found, display a message
  if (!product) {
    return <p>Product not found!</p>;
  }

  // Render product details
  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>SKU: {product.sku}</p>
      <p>Quantity: {product.qty}</p>
      <p>Price: ${product.price}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ProductDetail;