import React from 'react';

const Movie = ({ movie, onSelectMovie }) => {
    // console.log(movie);
    // console.log(onSelectMovie);

    return (
        <li onClick={() => {
            // console.log('click');
            onSelectMovie(movie.imdbID);
        }}>
            <img 
                src={movie.Poster} 
                alt={`${movie.Title} poster`} 
            />
            <h3>{movie.Title}</h3>
            <div>
            <p>
                <span>🗓</span>
                <span>{movie.Year}</span>
            </p>
            </div>
        </li>
    );
};

export default Movie;