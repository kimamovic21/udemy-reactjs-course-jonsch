import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleDecrement = () => {
      setCount((prevState) => prevState - step);
    };

    const handleIncrement = () => {
        setCount((prevState) => prevState + step);
    };

    const date = new Date('august 31 2023');
    date.setDate(date.getDate() + count);

    const handleStepDecrement = () => {
      setStep((prevState) => prevState - 1);
    };

    const handleStepIncrement = () => {
      setStep((prevState) => prevState + 1);
    };

    return (
      <div>

          <div>
            <button onClick={handleDecrement}>-</button>
            <span>Count: {count}</span>
            <button onClick={handleIncrement}>+</button>
          </div>

          <div>
            <button onClick={handleStepDecrement}>-</button>
            <span>Step: {step}</span>
            <button onClick={handleStepIncrement}>+</button>
          </div>

          <p>
            <span>
                {count === 0 
                  ? 'Today is ' 
                  : count > 0 
                  ? `${count} days from today is `
                  : `${Math.abs(count)} days ago was `
                }
            </span>
            <span>{date.toDateString()}</span> 
          </p>
      </div>
  );
};

export default Counter;