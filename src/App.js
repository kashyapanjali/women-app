// App.js
import React, { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import Banner from "./component/Banner";

function App() {
	const [showCart, setShowCart] = useState(false);
	const [cart, setCart] = useState([]);
	const [activeCategory, setActiveCategory] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");

	const addToCart = (product) => {
		const existingItem = cart.find((item) => item.id === product.id);
		if (existingItem) {
			setCart(
				cart.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			setCart([...cart, { ...product, quantity: 1 }]);
		}
	};

	const removeFromCart = (productId) => {
		const existingItem = cart.find((item) => item.id === productId);
		if (existingItem.quantity === 1) {
			setCart(cart.filter((item) => item.id !== productId));
		} else {
			setCart(
				cart.map((item) =>
					item.id === productId
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
			);
		}
	};

	const handleCategoryChange = (category) => {
		setActiveCategory(category);
	};

	const handleSearch = (term) => {
		setSearchTerm(term);
	};

	return (
		<div className='app'>
			<Header
				cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)}
				toggleCart={() => setShowCart(!showCart)}
				onSearch={handleSearch}
			/>
			<Banner />
			<main className='main-content'>
				<div className='category-filters'>
					<button
						className={activeCategory === "all" ? "active" : ""}
						onClick={() => handleCategoryChange("all")}>
						All Products
					</button>
					<button
						className={activeCategory === "menstrual" ? "active" : ""}
						onClick={() => handleCategoryChange("menstrual")}>
						Menstrual Care
					</button>
					<button
						className={activeCategory === "food" ? "active" : ""}
						onClick={() => handleCategoryChange("food")}>
						Healthy Food
					</button>
					<button
						className={activeCategory === "safety" ? "active" : ""}
						onClick={() => handleCategoryChange("safety")}>
						Safety Products
					</button>
					<button
						className={activeCategory === "wellness" ? "active" : ""}
						onClick={() => handleCategoryChange("wellness")}>
						Wellness
					</button>
				</div>
				<ProductList
					activeCategory={activeCategory}
					searchTerm={searchTerm}
					addToCart={addToCart}
				/>
			</main>
			{showCart && (
				<Cart
					cart={cart}
					closeCart={() => setShowCart(false)}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			)}
			<Footer />
		</div>
	);
}

export default App;
