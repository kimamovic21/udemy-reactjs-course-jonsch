import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai';
import Button from "./Button";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Steps = () => {
    const [step, setStep] = useState(1);
    console.log(step);
    const [isOpen, setIsOpen] = useState(true);
 
    const handlePrevious = () => {
      console.log('Previous');
      if(step > 1) {
        setStep((prevState) => {
            console.log(prevState);
            return prevState - 1;
        });
      };
    };

    const handleNext = () => {
      console.log('Next');
      if(step < 3) {
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

              {/* <p className="message">
                  <h3>Step {step}: </h3> {messages[step - 1]}
              </p> */}

              <StepMessage step={step}>
                  {messages[step - 1]}
                  <div className="buttons">
                    <Button 
                        bgColor='#7950f2'
                        textColor='#fff'
                        onClick={() => console.log(`Learn how to ${messages[step - 1]}`)}
                    >
                        Learn how 
                    </Button>
                  </div>
              </StepMessage>

              <div className="buttons">
                  <Button 
                      bgColor='#7950f2'
                      textColor='#fff'
                      onClick={handlePrevious}
                      // text='Previos'
                      // emoji='👈'
                  >
                      <span>👈</span>Previos
                  </Button>
                  
                  <Button 
                      bgColor='#7950f2'
                      textColor='#fff'
                      onClick={handleNext} 
                      // text='Next'
                      // emoji='👉'
                  >
                      Next <span>👉</span>
                  </Button>
              </div>

          </div>
        )}
      </>
    );
};

export default Steps;
