import React from 'react'
import WatchedMovie from './WatchedMovie';

const WatchedMoviesList = ({ watched }) => {
    return (
        <ul className="list">
            {watched.map((movie) => { 
            return (
                <WatchedMovie 
                    key={movie.imdbID}
                    movie={movie}
                />
            )})}
        </ul>
    );
};

export default WatchedMoviesList;