import React from "react";
import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

const Question = () => {
    const { questions, index } = useQuiz();
    // console.log(questions, index);

    const question = questions.at(index);
    console.log(question);

    return (
        <div>
            <h4>{question.question}</h4>
            <Options question={question} />
        </div>
    );
};

export default Question;