import React, { useEffect, useReducer } from 'react';
// import DateCounter from './components/DateCounter';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import Error from './components/Error';
import StartScreen from './components/StartScreen';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Timer from './components/Timer';

const SECONDS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: 'loading',  // status: 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const reducer = (state, action) => {
  const question = state.questions.at(state.index);
    switch (action.type) {
      case 'dataReceived': 
        return { 
          ...state, 
          questions: action.payload,
          status: 'ready'
        };

      case 'dataFailed':
        return {
          ...state,
          status: 'error'
        };

      case 'start': 
        return {
          ...state,
          status: 'active',
          secondsRemaining: state.questions.length * SECONDS_PER_QUESTION
        };

      case 'newAnswer':
        return {
          ...state,
          answer: action.payload,
          points: 
              (action.payload === question.correctOption) ? (state.points + question.points) : (state.points)
        };
      
      case 'nextQuestion':
        return {
          ...state,
          index: state.index + 1,
          answer: null
        };
      
      case 'finish': 
        return {
          ...state, 
          status: 'finished',
          points: 
              (action.payload === question.correctOption) ? (state.points + question.points) : (state.points),
          highscore: 
              (state.points > state.highscore) ? (state.points) : (state.highscore)
      };

      case 'restart': 
        return {
          ...initialState,
          questions: state.questions,
          highscore: state.highscore,
          status: 'ready',
      };

      case "tick": 
        return {
          ...state,
          secondsRemaining: state.secondsRemaining - 1,
          status: (state.secondsRemaining === 0) ? 'finished' : state.status,
          highscore:
            (state.secondsRemaining === 0)
              ? (Math.max(state.points, state.highscore))
              : (state.highscore),
      };
        
      default:
        throw new Error('Action unknown');
    };
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { questions, status, index, answer, points, highscore, secondsRemaining } = state;
    // console.log(questions, status, index, answer, points, highscore, secondsRemaining);

    const numQuestions = questions.length;
    // console.log(numQuestions);
    const maxPossiblePoints = questions.reduce((previos, current) => previos + current.points, 0);
    // console.log(maxPossiblePoints);

    useEffect(() => {
      fetch(`http://localhost:8000/questions`)
        .then((response) => {
            // console.log(response);
            return response.json();
        }) 
        .then((data) =>  {
            // console.log(data);
            dispatch({ type: 'dataReceived', payload: data});
        })
        .catch((error) => {
          console.error(error);
          dispatch({ type: 'dataFailed' });
        });
    }, []);

    return (
        <div className='app'>
            {/* <DateCounter /> */}
            <Header />
            <Main className='main'>
                {status === 'loading' && (<Loader />)}

                {status === 'error' && (<Error />)}

                {status === 'ready' && (
                    <StartScreen 
                        numQuestions={numQuestions}
                        dispatch={dispatch}
                    />
                )}

                {status === 'active' && (
                  <>
                    <Progress 
                        index={index}
                        numQuestions={numQuestions}
                        points={points}
                        maxPossiblePoints={maxPossiblePoints}
                        answer={answer}
                    />
                    <Question 
                        question={questions[index]}
                        dispatch={dispatch}
                        answer={answer}
                    />
                    <Footer>
                      <Timer 
                          dispatch={dispatch} 
                          secondsRemaining={secondsRemaining}   
                      />
                      <NextButton 
                          dispatch={dispatch}
                          answer={answer}
                          numQuestions={numQuestions}
                          index={index}
                      />
                    </Footer>
                  </>
                )}

                {status === 'finished' && (
                      <FinishScreen 
                          points={points}
                          maxPossiblePoints={maxPossiblePoints}
                          highscore={highscore}      
                          dispatch={dispatch} 
                      />
                )}
            </Main>
        </div>
    );
};

export default App;