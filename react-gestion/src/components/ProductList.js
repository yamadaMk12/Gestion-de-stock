import ProductItem from './ProductItem';

export default function ProductList({ products, onDelete }) {
  if (!products || products.length == 0) {
    return <div className="empty">No products</div>;
  }

  return (
    <div className="product-list">
      <h2>Products</h2>
      {products.map(p => (
        <ProductItem key={p.id} product={p} onDelete={onDelete} />
      ))}
    </div>
  );
}
