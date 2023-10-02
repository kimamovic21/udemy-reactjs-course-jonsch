import { createContext, useContext, useReducer, useEffect } from "react";

const QuizContext = createContext();

const SECONDS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading",  // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      };

    case "dataFailed":
      return {
        ...state,
        status: "error"
      };

    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECONDS_PER_QUESTION
      };

    case "newAnswer":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          (action.payload === question.correctOption)
            ? (state.points + question.points)
            : (state.points)
      };

    case "nextQuestion":
      return { 
        ...state, 
        index: state.index + 1, 
        answer: null 
      };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore: (state.points > state.highscore) ? state.points : state.highscore
      };

    case "restart":
      return { 
        ...initialState,
        questions: state.questions, 
        status: "ready" 
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: (state.secondsRemaining === 0) ? "finished" : state.status
      };

    default:
      throw new Error("Action unkonwn!");
  };
};

const QuizProvider = ({ children }) => {
    // console.log(children);

    const [state, dispatch] = useReducer(reducer, initialState);
    const { questions, status, index, answer, points, highscore, secondsRemaining } = state;

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

    useEffect(() => {
        fetch("http://localhost:8000/questions")
            .then((response) => response.json())
            .then((data) => dispatch({ type: "dataReceived", payload: data }))
            .catch((error) => dispatch({ type: "dataFailed" }));
    }, []);

    return (
        <QuizContext.Provider
            value={{
                questions: questions,
                status: status,
                index: index,
                answer: answer,
                points: points,
                highscore: highscore,
                secondsRemaining: secondsRemaining,
                numQuestions: numQuestions,
                maxPossiblePoints: maxPossiblePoints,
                dispatch: dispatch,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};

const useQuiz = () => {
  const context = useContext(QuizContext);

  if (context === undefined) {
    throw new Error("QuizContext was used outside of the QuizProvider");
  };

  return context;
};

export { QuizProvider, useQuiz };