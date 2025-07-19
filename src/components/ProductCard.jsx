import React from 'react';
import Button from '@mui/material/Button';

function ProductCard({ product, onAddToCart, isInCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {!isInCart && (
        <Button
          variant="contained"
          data-testid={`product-${product.id}`}
          onClick={() => onAddToCart(product.name)}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
}

export default ProductCard;

