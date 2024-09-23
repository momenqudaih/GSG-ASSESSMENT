import React from 'react';

function ProductList({products}) {
    return (
        <div className="product-display">
            {products.map((product) => (
                <div className="product" key={product.name}>
                    <h3>{product.name}</h3>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
