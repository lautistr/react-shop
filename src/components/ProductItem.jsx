import React, { useContext, useState } from 'react';
import ProductDetail from '@containers/ProductDetail';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';

import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	const [ toggleDetails, setToggleDetails] = useState(false);
	const handleToggleDetails = () => {
		setToggleDetails(!toggleDetails);
	}

	const { addToCart } = useContext(AppContext);
	const handleClick = (item) => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img
				src={product.images[0]}
				alt={product.title}
				onClick={handleToggleDetails}
			/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
			{toggleDetails && <ProductDetail
			 product={product}
			 handleClick={handleClick}
			 setToggleDetails={setToggleDetails}
			/>}
		</div>
	);
}


export default ProductItem;