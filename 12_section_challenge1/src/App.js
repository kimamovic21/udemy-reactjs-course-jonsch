import React, { useEffect, useState } from 'react';

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

const App = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('EUR');
    const [toCurrency, setToCurrency] = useState('USD');
    const [converted, setConverted] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleConvert = async () => {
            setIsLoading(true);
            const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await response.json();
            console.log(data);
            console.log(data.rates[toCurrency]);
            setConverted(data.rates[toCurrency]);
            setIsLoading(false);
        };
        
        if (fromCurrency === toCurrency) {
            setConverted(amount);
            return;
        };
        handleConvert();
    }, [amount, fromCurrency, toCurrency]);

    return (
        <div>
            <input 
                type="text" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))}
                disabled={isLoading}
            />

            <select 
              value={fromCurrency} 
              onChange={(e) => setFromCurrency(e.target.value)}
              disabled={isLoading}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CAD">CAD</option>
              <option value="INR">INR</option>
            </select>

            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              disabled={isLoading}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CAD">CAD</option>
              <option value="INR">INR</option>
            </select>

            <p>{converted} {toCurrency}</p>
        </div>
    );
};

export default App;
