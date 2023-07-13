import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
            <nav className='nav-container'>
                <h3 className='text-primary'>Dish App</h3>
                <div>
                <Link to='/home'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/login'>Login</Link>
                </div>

                
            </nav>
            
        
    );
};

export default Header;