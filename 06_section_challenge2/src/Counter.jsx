import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    const handleDecrement = () => {
      setCount((prevState) => prevState - step);
    };

    const handleIncrement = () => {
        setCount((prevState) => prevState + step);
    };

    const handleReset = () => {
        setCount(0);
        setStep(1);
    };

    return (
      <div>

          <div>
            <input 
                type="range" 
                min='0' max='10' 
                value={step} 
                onChange={(e) => setStep(Number(e.target.value))}
            />
              <span>Step: {step}</span>
          </div>

          <div>
            <button onClick={handleDecrement}>-</button>

            <input 
                type="text" 
                value={count} 
                onChange={(e) => setCount(Number(e.target.value))}
            />

            <button onClick={handleIncrement}>+</button>
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

          {count !== 0 || step !== 0 ? (<div>
            <button onClick={handleReset}>Reset</button>
          </div>) : (null)}
      </div>
  );
};

export default Counter;