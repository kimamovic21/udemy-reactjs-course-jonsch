import React from 'react'
import WatchedMovie from './WatchedMovie';

const WatchedMoviesList = ({ watched, onDeleteWatched }) => {
    // console.log(watched);
    // console.log(onDeleteWatched);

    return (
        <ul className="list">
            {watched.map((movie) => { 
                // console.log(movie);
                return (
                    <WatchedMovie 
                        key={movie.imdbID}
                        movie={movie}
                        onDeleteWatched={onDeleteWatched}
                    />
            )})}
        </ul>
    );
};

export default WatchedMoviesList;