import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, onSelectMovie }) => {
    // console.log(movies);
    // console.log(onSelectMovie);

    return (
        <ul className="list list-movies">
        {movies?.map((movie) => { 
            // console.log(movie);
            return (
              <Movie 
                key={movie.imdbID} 
                movie={movie}
                onSelectMovie={onSelectMovie}
            />
            )})}
        </ul>
    );
};

export default MovieList;