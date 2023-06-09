import React from 'react';

const Navbar = () => {
    return (
        <>
        <div className="navbar bg-base-100 border-b-2">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li tabIndex={0}>
                    <a className="justify-between">
                        Knowledge
                    </a>
                    </li>
                    <li><a>About</a></li>
                    <li><div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    </div>
                    </div></li>
                </ul>
                </div>
                <p className="btn btn-ghost normal-case text-bold text-2xl">Knowledge Cafe</p>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li tabIndex={0}>
                    <a>
                    Knowledge
                    </a>
                </li>
                <li><a>About</a></li>
                <li><div className="avatar">
                    <div className="w-12 rounded-full">
                        <img src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    </div>
                    </div></li>
                </ul>
            </div>
        </div>
            
        </>
    );
};

export default Navbar;