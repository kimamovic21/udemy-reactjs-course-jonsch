import { createContext, useContext, useState } from "react";

// 1. Create a context
const CounterContext = createContext();

// 2. Create parent component
const Counter = ({ children }) => {
    const [ count, setCount ] = useState(0);
    
    const increase = () => {
        setCount((c) => c + 1)
    };
    const decrease = () => {
        setCount((c) => c - 1)
    };

    return (
        <CounterContext.Provider 
            value={{count, increase, decrease}}
        >
            <span>{children}</span>
        </CounterContext.Provider>
    );
  }

// 3. Create child components to help implementing the common task
const Count = () => {
    const {count} = useContext(CounterContext);
    return (
        <span>{count}</span>
    );
};

const Label = ({ children }) => {
    return (
        <span>{children}</span>
    );
};

const Increase = ({ icon }) => {
    const { increase } = useContext(CounterContext);
    return (
        <button 
            style={{padding: '2px 10px' }} 
            onClick={increase}
        >
            {icon}
        </button>
    );
};

const Decrease = ({ icon }) => {
    const { decrease } = useContext(CounterContext);
    return (
        <button 
            style={{padding: '2px 10px' }} 
            onClick={decrease}
        >
            {icon}
        </button>
    );
};

// 4. Add child components as properties to parent component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
  