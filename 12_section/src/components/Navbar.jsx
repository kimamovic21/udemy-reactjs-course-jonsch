import React from 'react';

const Navbar = ({ children }) => {
    // console.log(children);
    
    return (
        <nav className="navbar">
            {children}
        </nav>
    );
};

export default Navbar;