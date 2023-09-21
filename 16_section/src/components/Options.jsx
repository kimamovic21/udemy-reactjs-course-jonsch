import React from 'react';

const Options = ({ question, dispatch, answer }) => {
    // console.log(question, dispatch, answer);

    const hasAnswered = answer !== null;

    return (
        <div className='options'>
            {question.options.map((option, index) => {
                return (
                    <button 
                        className={`
                            btn btn-option ${index === answer ? 'answer' : ''} 
                            ${hasAnswered ? (index === question.correctOption ? 'correct' : 'wrong') : ''}
                        `}
                        key={option}
                        disabled={hasAnswered}
                        onClick={() => {
                            console.log(`You cliked ${option}`);
                            dispatch({ type: 'newAnswer', payload: index})
                        }}
                    >
                        {option}
                    </button>
                )
            })} 
        </div>
    );
};

export default Options;