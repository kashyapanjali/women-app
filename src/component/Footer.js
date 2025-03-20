// components/Footer.js
import React from "react";

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<div className='footer-section'>
					<h3>BloomWell</h3>
					<p>
						Supporting women's health, safety, and wellbeing with quality
						products.
					</p>
				</div>
				<div className='footer-section'>
					<h3>Quick Links</h3>
					<ul>
						<li>
							<a href='#'>About Us</a>
						</li>
						<li>
							<a href='#'>Blog</a>
						</li>
						<li>
							<a href='#'>Women's Health Resources</a>
						</li>
						<li>
							<a href='#'>Safety Tips</a>
						</li>
						<li>
							<a href='#'>Contact Us</a>
						</li>
					</ul>
				</div>
				<div className='footer-section'>
					<h3>Newsletter</h3>
					<p>Get wellness tips and product updates</p>
					<div className='newsletter'>
						<input
							type='email'
							placeholder='Your email'
						/>
						<button>Subscribe</button>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>&copy; 2025 BloomWell. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
