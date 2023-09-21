The Ultimate React Course 2023: React, Redux & More
Section 16: The Advanced useReducer Hook


186. Section Overview

187. Yet Another Hook: useReducer
-u App.js fajl importujemo komponentu DateCounter.jsx
-u komponentu DateCounter.jsx importujemo React Hook useReducer
-u komponenti DateCounter.jsx kreiramo const [count, dispatch] = useReducer(reducer, 0)
-kreiramo funkciju reducer sa dva parametra state i action
-u funkcije icrement() i decrement() dodajemo funkciju dispatch()
-u funkcije dispatch dodajemo type i payload
-u funkciji reducer dodajemo uslove if
-u funkciju defineCount() dodajemo funkciju dispatch()

188. Managing Related Pieces of State
-kreiramo objekt const initialState 
-u funkciji reducer kreiramo uslov switch 
-https://stackoverflow.com/questions/4649423/should-switch-statements-always-contain-a-default-clause
-u funkciju defineStep() dodajemo funkciju dispatch()
-u funkciju reset() dodajemo funkciju dispatch()

189. Managing State With useReducer

190. The "React Quiz" App
-u App.js fajl importujemo komponentu Header.jsx
-kreiramo komponentu Main.jsx
-u komponenti Main.jsx, funkciji Main dodajemo parametar children
-u App.js fajl importujemo komponentu Main.jsx

191. Loading Questions from a Fake API
-instaliramo json server paket
-u terminal ukucamo komandu json-server
-kreiramo folder data
-u folderu data kreiramo questions.json fajl
-u package.json fajlu, u scripts dodajemo "server"
-u terminal ukucamo komandu npm run server
-u App.js fajlu kreiramo funkciju useEffect()
-u funkciji useEffect(), u callback funkciji, kreiramo metodu fetch
-kreiramo const [state, dispatch] = useReducer(reducer, initialState)
-kreiramo objekt const initialState
-kreiramo funkciju reducer() sa parametrima state i action
-u funkciju reducer() dodajemo uslov switch(action.type)
-u uslov switch dodajemo case 'dataReceived'
-u metodi .then() dodajemo dispatch funkciju({...})
-u uslov switch dodajemo case 'dataFailed'
-u uslov switch doadjemo case default
-u metodu .catch() dodajemo funkciju dispatch()

192. Handling Loading, Error and Ready Status
-u App.js fajlu kreiramo varijable const { questions, status} = state
-u return izjavi, dodajemo uslov {status === 'loading' && <Loader />}
-dodajemo uslov {status === 'error' && <Error />}
-kreiramo komponentu StartScreen.jsx
-dodajemo uslov {status === 'ready' && <StartScreen />}
-kreiramo varijablu const numQuestions
-u return izjavi, komponenti StartScreen dodajemo prop numQuestions
-u komponenti StartScreen.jsx, funkciji StartScreen dodajemo parametar destruktuirani prop numQuestions
-u return izjavu dodajemo prop numQuestions

193. Starting a New Quiz
-kreiramo komponentu Question.jsx
-u App.js fajlu, u return izjavi dodajemo uslov {status === 'active' && <Question />}
-u App.js fajlu, u uslov switch dodajemo case 'start'
-u return izjavi, komponenti StartScreen dodajemo prop dispatch
-u komponenti StartScreen.jsx, funkciji StartScreen dodajemo prop dispatch
-button elementu dodajemo dogadaj onClick
-u onClick dogadaj proslijedujemo anonimnu funkciju
-u anonimnu funkciju proslijedujemo funkciju dispatch

194. Displaying Questions
-u App.js fajlu, u objekt initialState dodajemo index: 0
-u return izjavi, komponenti Question dodajemo prop question
-u komponenti Question.jsx, funkciji Question dodajemo prop question
-u return izjavi dodajemo question.options.map()
-kreiramo komponentu Options.jsx
-u komponenti Options, funkcij Options dodajemo parametar question
-u komponentu Question.jsx importujemo komponentu Options.jsx
-u return izjavi, komponenti Options dodajemo prop question

195. Handling New Answers
-u App.js fajl, u objekt initialState dodajemo answer: null
-u funkciji reducer() kreiramo case 'newAnswer'
-u return izjavi, komponenti Question dodajemo props dispatch i answer
-u komponenti Question.jsx, funkciji Question dodajemo parametre dispatch i answer
-u return izjavi, komponenti Options dodajemo props dispatch i answer
-u komponenti Options, button elementu dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo anonimnu funkciju
-u anonimnu funkciju proslijedujemo funkciju dispatch()
-button elementu dodajemo uslov za dinamicko pojavljivanje css klasa
-button elementu dodajemo prop disabled
-kreiramo varijablu const hasAnswered
-u prop disabled proslijedujemo varijablu hasAnswered
-u objekt initialState dodajemo points: 0
-u App.js fajlu, u case 'newAnswer', kreiramo varijablu question

196. Moving to the Next Question
-u App.js fajlu dodajemo case 'nextQuestion'
-kreiramo komponentu NextButton.jsx
-u komponenti NextButton.jsx funkciji NextButton dodajemo parametre dispatch i answer
-u return izjavi u status === 'active' dodajemo komponentu NextButton
-komponenti NextButton dodajemo props dispatch i answer
-dodajemo uslov if (answer === null)
-button elementu dodajemo dogadaj onClick
-u onClick dogadaj proslijedujemo vrijednost anonimne funkcije
-u anonimnu funkciju proslijedujemo funkciju dispatch()
-u App.js fajlu, u case 'nextQuestion' dodajemo answer: null

197. Displaying Progress
-kreiramo komponentu Progress.jsx
-u komponenti Progress.jsx, funkciji Progress dodajemo parametre index, numQuestions, points
-u App.js fajlu, u return izjavi, dodajemo komponentu Progress
-komponenti Progress dodajemo props index, numQuestions, points
-u App.js fajlu kreiramo varijablu const maxPossiblePoints
-u return izjavi, komponenti Progress doadjemo prop maxPossiblePoints i answer
-u komponenti Progress.jsx, kreiramo progress element
-progress elementu dodajemo atribute max i value
-u App.js fajlu, u return izjavi, komponenti Progress dodajemo props maxPossiblePoints i answer

198. Finishing a Quiz
-kreiramo komponenti FinishScreen.jsx
-u komponenti FinishScreen.jsx, funkciji FinishScreen dodajemo parametre points, maxPossiblePoints
-kreiramo varijablu const percentage 
-u App.js fajlu, u return izjavi, komponenti FinishScreen dodajemo props points, maxPossiblePoints
-u komponenti NextButton.jsx, funkciji NextButton dodajemo parametre index, numQuestions 
-dodajemo uslov if (index < numQuestions - 1)
-u App.js fajlu, komponenti NextButton dodajemo props index, numQuestions 
-u NextButton.jsx komponenti, dodajemo uslov if (index === numQuestions - 1)
-u App.js fajlu, dodajemo case 'finish'
-u komponenti FinishScreen kreiramo varijablu let emoji
-kreiramo uslove if (percentage ... )
-u App.js fajlu, u objekt initialState dadajemo highscore: 0
-u return izjavi, komponenti Highscore dodajemo prop highscore
-u komponenti FinishScreen.jsx, funkciji FinishScreen dodajemo parametar highscore 

199. Restarting a Quiz
-u komponenti FinishScreen.jsx, funkciji FinishScreen dodajemo parametar dispatch
-u return izjavi kreiramo buttom Restart quiz element
-u App.js fajlu kreiramo case 'restart'
-u return izjavi, komponenti FinishScreen dodajemo prop dispatch

200. Setting Up a Timer With useEffect
-kreiramo komponentu Footer.jsx
-u komponenti Timer.jsx, funkciji Timer dodajemo parametar dispatch
-u komponenti Timer.jsx kreiramo funkciju useEffect()
-u funkciji useEffect(), u callbackfunkciji, kreiramo funkciju setInterval
-u funkciju setInterval dodajemo funkciju dsispatch
-u App.js fajlu, u objekt initialState dodajemo secondsRemaining: 10
-kreiramo case "tick"
-https://stackoverflow.com/questions/55304749/why-its-saying-nested-block-is-redundant-no-lone-block
-u return izjavi, komponenti Timer dodajemo props dispatch i secondsRemaining
-u komponenti Timer.jsx, funkciji Timer dodajemo prop secondsRemaining
-kreiramo varijablu const id
-dodajemo return () => clearInterval(id)
-u App.js fajlu, u case 'start', dodajemo secondsRemaining
-u komponenti Timer.jxs kreiramo varijable const minutes i const seconds

201. Section Summary: useState vs useReducer
