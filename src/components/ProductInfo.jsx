import React from 'react';
import '@styles/ProductInfo.scss';

import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = ({ product, handleClick, setToggleDetails }) => {
	const addToCartAndClose = () => {
		handleClick(product),
		setToggleDetails(false)
	}

	return (
		<>
			<img src={product.images[0]} alt={product.title} className="product"/>
			<div className="ProductInfo">
				<p>${product.price}</p>
				<p>{product.title}</p>
				<p>{product.description}</p>
				<button
					className="primary-button add-to-cart-button"
					onClick={addToCartAndClose}
				>
					<img src={addToCart} alt="add to cart" id="add-to-cart" />
					Add to cart
				</button>
			</div>
		</>
	);
}

export default ProductInfo;