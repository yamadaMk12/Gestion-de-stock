import React from 'react';

export default function ProductItem({ product, onUpdate, onDelete }) {
  const low = Number(product.quantity) <= 2;

  return (
    <div className={`product-item ${low ? 'low' : ''}`}>
      <div className="meta">
        <div className="name">{product.name}</div>
        <div className="price">€{Number(product.price || 0).toFixed(2)}</div>
      </div>
      <div className="controls">
        <button onClick={() => onUpdate(product.id, { quantity: Math.max(0, Number(product.quantity) - 1) })}>-</button>
        <div className="qty">{product.quantity}</div>
        <button onClick={() => onUpdate(product.id, { quantity: Number(product.quantity) + 1 })}>+</button>
        <button className="delete" onClick={() => onDelete(product.id)}>Delete</button>
      </div>
    </div>
  );
}
