// components/Header.js
import React from "react";

function Header({ cartItemCount, toggleCart, onSearch }) {
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
			<div className='sign-in'>Hello,sign in</div>
			<div className='cart-button'>
				<button onClick={toggleCart}>Cart ({cartItemCount})</button>
			</div>
		</header>
	);
}

export default Header;
