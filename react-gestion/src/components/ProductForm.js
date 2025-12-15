import React, { useState } from 'react';

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('1');

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const p = {
      name: name.trim(),
      price: Math.max(0, parseFloat(price) || 0),
      quantity: Math.max(0, parseInt(quantity, 10) || 0),
    };
    onAdd(p);
    setName(''); setPrice(''); setQuantity('1');
  };

  return (
    <form className="product-form" onSubmit={submit}>
      <h2>Add product</h2>
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Price (€)
        <input type="number" step="0.01" min="0" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Quantity
        <input type="number" min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
