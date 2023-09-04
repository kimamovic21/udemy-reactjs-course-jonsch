import React from 'react';
import Steps from './Steps';
import StepMessage from './StepMessage';

const App = () => {
    return (
        <div>
            <Steps />
            <StepMessage step={1}>
                <p>Pass in content</p>
            </StepMessage>
            <StepMessage step={2}>
                <p>React children prop</p>
            </StepMessage>
        </div>
    );
};

export default App;