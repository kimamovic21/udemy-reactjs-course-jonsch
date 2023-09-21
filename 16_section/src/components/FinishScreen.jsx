import React from 'react';

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
    // console.log(points, maxPossiblePoints, highscore, dispatch);

    const percentage = (points / maxPossiblePoints) * 100;

    let emoji;
    if (percentage > 90 ) emoji = '🥇';
    if (percentage >= 70 && percentage <= 90) emoji = '🥳';
    if (percentage >= 50 && percentage <= 70) emoji = '😊';
    if (percentage > 0 && percentage <= 50) emoji = '🤔';
    if (percentage === 0) emoji = '🤦‍♂️';

    return (
        <>
            <p className='result'>
                <span>{emoji}</span> You scored <strong>{points}</strong> out of {maxPossiblePoints} points ({ Math.ceil(percentage) })%
            </p> 
            <p className='highscore'>(Highscore: {highscore} Points)</p>
            <button 
                className='btn btn-ui' 
                onClick={() => dispatch({ type: 'restart' })}
            >   
                Restart
            </button>
        </>
    );
};

export default FinishScreen;