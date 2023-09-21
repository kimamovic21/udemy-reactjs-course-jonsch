import React, { useReducer } from "react";

const initialState = { count: 0, step: 1 };

const reducer = (state, action) => {
    console.log(state, action);

    switch(action.type) {
        case 'increment':
            return { ...state, count: state.count + state.step };
        case 'decrement':
            return { ...state, count: state.count - state.step };
        case 'setCount': 
            return { ...state, count: action.payload };
        case 'setStep': 
            return { ...state, step: action.payload };
        case 'reset':
            return initialState;
        default: 
            throw new Error('Unknown action');
    };
    // if (action.type === 'increment') return state + action.payload;
    // if (action.type === 'decrement') return state - action.payload;
    // if (action.type === 'setCount') return action.payload;
};

const DateCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { count, step } = state;

    // This mutates the date object.
    const date = new Date("september 20 2023");
    date.setDate(date.getDate() + count);

    const decrement = function () {
        dispatch({ type: 'decrement', payload: 1} );
    };
        
    const increment = function () {
        dispatch({ type: 'increment', payload: 1 });
    };

    const defineCount = function (e) {
        dispatch({ type: 'setCount', payload: Number(e.target.value) });
    };

    const defineStep = function (e) {
        dispatch({ type: 'setStep', payload: Number(e.target.value) });
    };

    const reset = function () {
        dispatch({ type: 'reset' });
    };

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={decrement}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={increment}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default DateCounter;