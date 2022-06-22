import React from 'react';
import '@styles/MobileMenu.scss';

const MobileMenu = () => {
    return (
        <div class="mobile-menu">
            <ul>
                <li>
                    <p>CATEGORIES</p>
                </li>
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

                <ul>
                <li>
                    <a href="/account">My account</a>
                </li>
                </ul>

                <ul>
                <li>
                    <a href="/account" class="email">lautarostrappazzon@gmail.com</a>
                </li>
                <li>
                    <a href="/signup" class="sign-out">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileMenu;