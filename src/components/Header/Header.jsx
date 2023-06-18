import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-300">
                <Link to='/' className="normal-case text-xl px-3">Firebase-Tailwind</Link>
                <Link to='/' className='norma-case text-xl px-3'>Home</Link>
                <Link to='/login' className='norma-case text-xl px-3'>Login</Link>
            </div>
        </>
    );
};

export default Header;