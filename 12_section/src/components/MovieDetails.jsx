import React, { useEffect, useState } from 'react';
import StarRating from '../components/StarRating';
import Loader from './Loader';

const KEY = '8e52388c';

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
    // console.log(selectedId);
    // console.log(onCloseMovie);
    // console.log(onAddWatched);
    // console.log(watched);

    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState('');

    const isWatched = watched.map((movie) => {
        // console.log(movie);
        return movie.imdbID;
    }).includes(selectedId);
    // console.log(isWatched);

    const watchedUserRating = watched.find((movie) => {
        return movie.imdbID === selectedId;
    })?.userRating;

    const {
        Title: title, 
        Year: year,
        Poster: poster, 
        Runtime: runtime, 
        imdbRating, 
        Plot: plot, 
        Released: released,
        Actors: actors, 
        Director: director, 
        Genre: genre 
    } = movie;

    // console.log(title, year, poster, runtime, imdbRating, plot, released, actors, director, genre);

    const handleAdd = () => {
        const newWatchedMovie = {
            imdbID: selectedId,
            title,
            year,
            poster,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(' ').at(0)),
            userRating,
        };

        onAddWatched(newWatchedMovie);
        onCloseMovie();
    };


    useEffect(() => {
        const callback = (event) => {
            if(event.code === 'Escape') {
                onCloseMovie();
                // console.log('CLOSING');
            };
        }
        document.addEventListener('keydown', callback);

        return () => {
            document.removeEventListener('keydown', callback);
        };
    }, [onCloseMovie]);


    useEffect(() => {
        const getMovieDetails = async () => {

            setIsLoading(true);

            const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            // console.log(res);
            const data = await res.json();
            // console.log(data);

            setMovie(data);
            setIsLoading(false);
        };

        getMovieDetails();
    }, [selectedId]);


    useEffect(() => {
        if (!title) {
            return;
        };
        document.title = `Movie | ${title}`;

        return () => {
            document.title = 'Section 12';
            // console.log(`Clean up effect for movie ${title}`);
        };
    }, [title]);


    return (
        <div className='details'>
            {isLoading ? (<Loader />) : (
                <>
                    <header>
                        <button className='btn-back' onClick={onCloseMovie}>
                            &#8592;
                        </button>
                        <img src={poster} alt={`Poster of ${movie}`} />
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>{released} &bull; {runtime}</p>
                            <p>{genre}</p>
                            <p><span>⭐</span>{imdbRating} IMDb rating</p>
                        </div>
                    </header>

                    <section>
                       <div className='rating'>
                          {!isWatched ? (
                            <>
                                <StarRating 
                                    maxRating={10} 
                                    size={24}
                                    onSetRating={setUserRating}
                                />
                                {userRating > 0 && (<button className='btn-add' onClick={handleAdd}>
                                    + Add to list
                                </button>)}
                            </>
                           ) : (
                                <p>
                                    You rated this movie with {watchedUserRating} <span>⭐</span>
                                </p>
                           )}
                        </div>

                        <p><em>{plot}</em></p>
                        <p>Staring {actors}</p>
                        <p>Directed by {director}</p>
                    </section>
                </>
            )}
            {/* {selectedId} */}
        </div>
    );
};

export default MovieDetails;