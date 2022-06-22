import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MobileMenu from '@components/MobileMenu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder'
import menu from '@icons/icon_menu.svg';
import isoLogo from '@verole/black_isologo.png';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [ toggleDesktop, setToggleDesktop ] = useState(false);
	const [ toggleMobile, setToggleMobile ] = useState(false);
	const [ toggleOrders, setToggleOrders ] = useState(false);
	const { state:{cart} } = useContext(AppContext);

	const handleClickDesktop = () => {
		setToggleDesktop(!toggleDesktop);
	}

	const handleClickMobile = () => {
		setToggleMobile(!toggleMobile);
	}

	const verifyCart = (cartNumber) => {
		if ((cartNumber) && (cartNumber > 9)) {
		  return "+9";
		} else {
			return cartNumber;
		}
	}

    return (
        <nav>
			<img src={menu} alt="logo" className="menu"
				onClick={handleClickMobile}
			/>
			<div className="navbar-left">
				<a href="/" className="nav-logo"><img src={isoLogo} alt="logo"/></a>
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Necklaces</a>
					</li>
					<li>
						<a href="/">Earrings</a>
					</li>
					<li>
						<a href="/">Bracelets</a>
					</li>
					<li>
						<a href="/">Rings</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li
						className="navbar-email"
						onClick={handleClickDesktop}
					>
						lautarostrappazzon@gmail.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{cart.length > 0 && <div>{verifyCart(cart.length)}</div>}
					</li>
				</ul>
			</div>
			{toggleDesktop && <Menu/>}
			{toggleMobile && <MobileMenu/>}
			{toggleOrders &&
				<MyOrder
					toggleOrders={toggleOrders}
					setToggleOrders={setToggleOrders}
				/>}
		</nav>
    );
}

export default Header;