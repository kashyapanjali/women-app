// components/Cart.js
import React from "react";

function Cart({ cart, closeCart, addToCart, removeFromCart }) {
	const totalPrice = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div className='cart-overlay'>
			<div className='cart-container'>
				<div className='cart-header'>
					<h2>Your Cart</h2>
					<button
						className='close-button'
						onClick={closeCart}>
						×
					</button>
				</div>
				<div className='cart-items'>
					{cart.length === 0 ? (
						<p className='empty-cart'>Your cart is empty</p>
					) : (
						cart.map((item) => (
							<div
								key={item.id}
								className='cart-item'>
								<img
									src={item.image}
									alt={item.name}
								/>
								<div className='cart-item-details'>
									<h3>{item.name}</h3>
									<p>${item.price.toFixed(2)}</p>
								</div>
								<div className='cart-item-quantity'>
									<button onClick={() => removeFromCart(item.id)}>-</button>
									<span>{item.quantity}</span>
									<button onClick={() => addToCart(item)}>+</button>
								</div>
							</div>
						))
					)}
				</div>
				{cart.length > 0 && (
					<div className='cart-footer'>
						<div className='cart-total'>
							<span>Total:</span>
							<span>${totalPrice.toFixed(2)}</span>
						</div>
						<button className='checkout-button'>Proceed to Checkout</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Cart;
