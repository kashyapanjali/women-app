// components/ProductCard.js
import React from "react";

function ProductCard({ product, addToCart }) {
	return (
		<div className='product-card'>
			<div className='product-image'>
				<img
					src={product.image}
					alt={product.name}
				/>
				{product.stock <= 10 && (
					<span className='low-stock'>Only {product.stock} left!</span>
				)}
			</div>
			<div className='product-info'>
				<h3>{product.name}</h3>
				<p className='product-description'>{product.description}</p>
				<div className='product-footer'>
					<span className='product-price'>${product.price.toFixed(2)}</span>
					<button onClick={() => addToCart(product)}>Add to Cart</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
