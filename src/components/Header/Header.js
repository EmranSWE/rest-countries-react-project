import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div >
            <h3>Welcome To the react</h3>
            <nav className='head'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Shop</a>
            </nav>
        </div>
    );
};

export default Header;