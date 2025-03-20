// components/Header.js
import React, { useState } from "react";
import Auth from "./Auth";

function Header({ cartItemCount, toggleCart, onSearch }) {
	const [showAuth, setShowAuth] = useState(false);

	return (
		<header className='header'>
			<div className='logo'>
				<h1>NearToWomen</h1>
				<p>For Women's Wellness & Safety</p>
			</div>
			<div className='search-bar'>
				<input
					type='text'
					placeholder='Search products...'
					onChange={(e) => onSearch(e.target.value)}
				/>
			</div>
			<div className='auth-section'>
				<button 
					className='auth-toggle-button'
					onClick={() => setShowAuth(!showAuth)}
				>
					Sign In
				</button>
				{showAuth && <Auth />}
			</div>
			<div className='cart-button'>
				<button onClick={toggleCart}>Cart ({cartItemCount})</button>
			</div>
		</header>
	);
}

export default Header;
