import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';

import close from '@icons/icon_close.png';

const ProductDetail = ({ product, setToggleDetails, handleClick }) => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close" onClick={() => setToggleDetails(false)} >
				<img src={close} alt="close" id="close-img" />
			</div>
			<ProductInfo
				product={product}
				handleClick={handleClick}
				setToggleDetails={setToggleDetails}
			/>
		</aside>
	);
}

export default ProductDetail;