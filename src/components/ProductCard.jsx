import React from 'react';

function ProductCard({ product, onAddToCart, isInCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {!isInCart && (
        <button
          data-testid={`product-${product.id}`}
          onClick={() => onAddToCart(product.name)}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
