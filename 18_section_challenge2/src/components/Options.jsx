import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const Options = ({ question }) => {
    // console.log(question);

    const { dispatch, answer } = useQuiz();
    // console.log(dispatch, answer);

    const hasAnswered = answer !== null;

    return (
        <div className="options">
            {question.options.map((option, index) => { 
                // console.log(option, index);

                return (
                    <button
                        className={`btn btn-option ${index === answer ? "answer" : ""} 
                                  ${hasAnswered ? index === question.correctOption ? "correct" : "wrong": ""}`
                        }
                        key={option}
                        disabled={hasAnswered}
                        onClick={() => dispatch({ type: "newAnswer", payload: index })}
                    >
                        {option}
                    </button>
                )
            })}
        </div>
    );
};

export default Options;