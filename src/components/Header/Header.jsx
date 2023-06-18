import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-300">
                <a className="btn btn-ghost normal-case text-xl">Firebase-Tailwind</a>
                <div className=' flex justify-end btn btn-ghost normal-case text-xl'>
                    <Link to='/login'>Login</Link>
                    
                </div>
            </div>
        </>
    );
};

export default Header;