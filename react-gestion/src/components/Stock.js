import { useEffect, useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

export default function Stock() {
    const [products, setProducts] = useState(() => {
        try {
        const raw = localStorage.getItem('products');
        return raw ? JSON.parse(raw) : [];
        } catch (e) {
        return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
        setProducts((prev) => [
        ...prev,
        { id: Date.now().toString(), ...product },
        ]);
    };

    const removeProduct = (id) => setProducts((prev) => prev.filter(p => p.id !== id));

    const totalItems = products.reduce((s, p) => s + Number(p.quantity), 0);
    const totalValue = products.reduce((s, p) => s + (Number(p.quantity) * Number(p.price)), 0);
    return <>
        <header>
            <h1>Gestion de stock</h1>
        </header>
        <main>
            <section className="left">
            <ProductForm onAdd={addProduct} />
            <div className="summary">
                <div>Total items: <strong>{totalItems}</strong></div>
                <div>Total value: <strong>€{totalValue.toFixed(2)}</strong></div>
            </div>
            </section>
            <section className="right">
            <ProductList
                products={products}
                onDelete={removeProduct}
            />
            </section>
        </main>
    </>;
}