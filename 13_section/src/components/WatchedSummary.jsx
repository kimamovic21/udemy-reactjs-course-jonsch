import React from 'react';

const WatchedSummary = ({ watched }) => {
    // console.log(watched);

    const average = (arr) => {
        return arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
    };

    const avgImdbRating = average(watched.map((movie) => {
        return movie.imdbRating;
    }));
    const avgUserRating = average(watched.map((movie) => {
        return movie.userRating;
    }));
    const avgRuntime = average(watched.map((movie) => {
        return movie.runtime;
    }));

    return (
        <div className="summary">

            <h2>Movies you watched</h2>

            <div>
                <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                </p>
            </div>

        </div>
    );
};

export default WatchedSummary;