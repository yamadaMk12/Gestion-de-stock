import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products, onUpdate, onDelete }) {
  if (!products || products.length === 0) {
    return <div className="empty">No products yet. Add some to begin.</div>;
  }

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map(p => (
        <ProductItem key={p.id} product={p} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}
