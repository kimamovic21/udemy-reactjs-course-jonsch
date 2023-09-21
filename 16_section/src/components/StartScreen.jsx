import React from 'react';

const StartScreen = ({ numQuestions, dispatch }) => {
    // console.log(numQuestions, dispatch);

    return (
        <div className='start'>
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numQuestions} questions to test your React mastery</h3>
            <button 
                className='btn btn-ui'
                onClick={() => {
                    console.log(`Let's start button`);
                    dispatch({ type: 'start' });
                }}
            >
                Let's start
            </button>
        </div>
    );
};

export default StartScreen;