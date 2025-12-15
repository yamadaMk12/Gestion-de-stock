export default function ProductItem({ product, onDelete }) {
  return (
    <div className="product-item">
      <div className="meta">
        <div className="name">{product.name}</div>
        <div className="price">€{Number(product.price || 0).toFixed(2)}</div>
        <div className="qty">Qty: {product.quantity}</div>
      </div>
      <button className="delete" onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
}
