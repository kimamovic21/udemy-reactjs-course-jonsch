import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
    return (
        <ul className="list">
        {movies?.map((movie) => { 
            return (
              <Movie 
                key={movie.imdbID} 
                movie={movie}
            />
            )})}
        </ul>
    );
};

export default MovieList;