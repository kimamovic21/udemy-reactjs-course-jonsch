import React, { useEffect, useState } from "react";
import Message from "./Message";

const App = () => {
    const [advice, setAdvice] = useState('');
    // console.log(advice, setAdvice);
    const [count, setCount] = useState(0);
    // console.log(count, setCount);

    const getAdvice = async () => {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        // console.log(data.slip.advice);
        setAdvice(data.slip.advice);
        // setCount(count + 1);
        setCount((c) => {
          console.log(c + 1);
          return c + 1;
        });
    };

    useEffect(() => {
      console.log('This is useEffect ReactJS Hook');
      // getAdvice();
    }, []);

    return (
      <div className="App">
          <h1>Hello World!</h1>
          <button onClick={getAdvice}>Get Advice</button>
          <Message count={count}/>
          <p>{advice}</p>
      </div>
    );
};

export default App;