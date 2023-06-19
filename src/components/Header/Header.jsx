import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <div className="navbar bg-base-300">
                <Link to='/' className="normal-case text-xl px-3">Firebase-Tailwind</Link>
                <Link to='/' className='norma-case text-xl px-3'>Home</Link>
                <Link to='/orders' className='norma-case text-xl px-3'>Orders</Link>
                {
                    user &&
                    <Link to='/dashboard' className='norma-case text-xl px-3'>Dashboard</Link>
                }
                <Link to='/login' className='norma-case text-xl px-3'>Login</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className='btn btn-info'>Sign Out</button>
                    </> : <Link to='/login'>Login</Link>
                }
            </div>
        </>
    );
};

export default Header;