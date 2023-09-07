import React from 'react';
// import Search from './Search';
// import Logo from './Logo';
// import NumResults from './NumResults';

const Navbar = ({ movies, children }) => {
    return (
        <nav className="navbar">
            {/* <Logo /> */}
            {/* <Search /> */}
            {/* <NumResults movies={movies}/> */}
            {children}
        </nav>
    );
};

export default Navbar;