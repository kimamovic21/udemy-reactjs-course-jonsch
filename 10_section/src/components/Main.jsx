import React from 'react';
// import Box from './Box';
// import WatchedBox from './WatchedBox';

const Main = ({ movies, children }) => {
    return (
        <main className="main">
            {/* <ListBox movies={movies} /> */}
            {/* <WatchedBox /> */}
            {children}
        </main>
    );
};

export default Main;