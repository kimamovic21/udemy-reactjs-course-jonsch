import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
    // console.log(useState());
    // const step = 1;
    // let [step, setStep] = useState(1);
    const [step, setStep] = useState(1);
    console.log(step);
    const [isOpen, setIsOpen] = useState(true);
 
    const handlePrevious = () => {
      console.log('Previous');
      // step--;
      if(step > 1) {
        // setStep(step - 1);
        setStep((prevState) => {
            console.log(prevState);
            return prevState - 1;
        });
      };
    };

    const handleNext = () => {
      console.log('Next');
      // step++;
      if(step < 3) {
        // setStep(step + 1);
        setStep((prevState) => {
          console.log(prevState);
          return prevState + 1;
        });
      };
    };

    return (
      <>
        <button className="close" onClick={() => setIsOpen((prevState) => !prevState)}>
          {isOpen ? <AiOutlineClose/> : <AiOutlineMenuFold /> }
        </button>

        {isOpen && (
          <div className="steps">

              <div className="numbers">
                  <div className={step >= 1 ? 'active' : ''}>1</div>
                  <div className={step >= 2 ? 'active' : ''}>2</div>
                  <div className={step >= 3 ? 'active' : ''}>3</div>
              </div>

              <p className="message">
                  Step {step}: {messages[step - 1]}
              </p>

              <div className="buttons">
                <button 
                  style={{backgroundColor: '#7950f2', color: '#fff'}} 
                  onClick={handlePrevious}
                  // onClick={() => alert('Previous')}
                  // onMouseEnter={() => console.log('onMouseEnter')}
                >
                    Previous
                </button>
                <button 
                  style={{backgroundColor: '#7950f2', color: '#fff'}} 
                  // onClick={() => alert('Next')}
                  onClick={handleNext}
                >
                    Next
                </button>
              </div>

          </div>
        )}
      </>
    );
};

export default App;
