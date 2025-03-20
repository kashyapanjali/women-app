// components/ProductList.js
import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../Data/product";

function ProductList({ activeCategory, searchTerm, addToCart }) {
	const filteredProducts = products.filter((product) => {
		const matchesCategory =
			activeCategory === "all" || product.category === activeCategory;
		const matchesSearch =
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.description.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<div className='product-list'>
			{filteredProducts.length === 0 ? (
				<p className='no-products'>
					No products found. Try a different search.
				</p>
			) : (
				filteredProducts.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						addToCart={addToCart}
					/>
				))
			)}
		</div>
	);
}

export default ProductList;
