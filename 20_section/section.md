The Ultimate React Course 2023: React, Redux & More
Section 20: Redux and Modern Redux Toolkit(With Thunks)


260. Section Overview

261. Introduction to Redux

262. Creating a Reducer: Bank Account
-u src folderu kreiramo jsx komponente
-u src folderu kreiramo store.js fajl
-u store.js fajlu kreiramo object initialStateAccount
-u objekt initialStateAccount dodajemo varijable balance, loan, loanPurpose
-kreiramo funkciju accountReducer() sa dva parametra state i action
-u funkciji accountReducer() kreiramo uslov switch(action.type)
-u uslovu switch kreiramo case "account/deposti"
-u return izjavu dodajemo varijable state i balance
-kreiramo case 'account/withdraw'
-kreiramo slucaj default
-u slucaj default dodajemo return state
-kreiramo case 'account/requestLoan'
-u case 'account/requestLoan' dodajemo uslov if
-u return izjavu dodajemo varijable state, loan, loanPurpose, balance
-kreiramo case 'account/payLoan'
-u return izjavu dodajemo varijable state, loan, loanPurpose, balance

263. Creating a Redux Store
-instaliramo Redux pakete
-u terminal ukucamo komandu npm install redux
-u store.js fajl importujemo funkciju createStore
-kreiramo funkciju createStore(reducer)
-vrijednost funkcije createStore(reducer) pohranjujemo u varijablu const store
-varijabli store dodajemo funkciju dispatch()
-u funkciju dispatch() dodajemo objekt 
-u objekt dodajemo varijable type i payload
-u komponentu main.jsx importujemo store.js fajl
-varijabli store dodajemo funkciju dispatch()
-u konzolu ispisujemo store.getState();

264. Working With Action Creators
-u store.js fajlu kreiramo funkcije deposit, withdraw, requestLoan, payLoan
-funkcijama deposit i withdraw dodajemo parametre amount
-dodajemo store.dispatch(deposit(500))
-dodajemo store.dispatch(withdraw(200))
-funkciji requestLoan dodajemo parametre amount i purpose
-dodajemo store.dispatch(requestLoan(10000, 'Buy a car'))

265. Adding More State: Customer
-u store.js fajlu kreiramo objekt const initialStateCustomer
-u objekt initialStateCustomer dodajemo varijable fullName, nationalId, createdAt
-kreiramo funkciju createCustomer() sa parametrima fullName i nationalId
-u return izjavu dodajemo varijable type i payload
-kreiramo funkciju updateName() sa parametrim fullName
-u return izjavu dodajemo varijable type i payload
-kreiramo funkciju customerReducer() sa parametrima state i action
-u funkciju customerReducer() dodajemo uslov switch(action.type)
-u uslovu switch kreiramo case 'customer/createCustomer'
-u return izjavi dodajemo varijable state, fullName, nationalId, createdAt
-dodajemo slucaj default
-dodajemo case 'customer/updateName'
-u return izjavu dodajemo varijable state, fullName
-kreiramo varijablue const rootReducer
-dodajemo store.dispatch(createCustomer('Kerim Imamovic', '12345'))

266. Professional Redux File Structure: State Slices
-u folderu src kreiramo folder features
-u folderu features kreiramo foldere accounts i customers
-u folderu accounts kreiramo komponente AccountOperations.jsx i BalanceDisplay.jsx
-u folderu customers kreiramo komponente CreateCustomer.jsx i Customer.jsx
-u folderu accounts kreiramo accountSlice.js fajl
-u folderu customers kreiramo customerSlice.js fajl
-kod iz store.js fajla podjelimo kopiramo u accountSlice.js i customerSlice.js fajlove
-u store.js fajl importujemo funkcije accountReducer i customerReducer
-eskportujemo varijablu store

267. Back to React! Connecting our Redux App With React
-instaliramo react-redux paket u terminalu
-u terminal ukucamo komandu npm install react-redux
-u main.jsx komponentu importujemo komponentu Provider
-u return izjavu dodajemo komponentu Provider
-komponenti Provider dodajemo prop store
-u prop store proslijedujemo vrijednost varijable store
-u komponentu Customer.jsx importujemo React Hook useSelector
-kreiramo funkciju useSelector
-vrijednost funkcije useSelector pohranjujemo u varijablu const customer

268. Dispatching Actions from Our React App
-u komponentu CreateCustomer importujemo React Hook useDispatch
-kreiramo varijablu const dispatch 
-u funkciju handleClick() dodajemo funkciju dispatch()
-u funkciju handleClick() dodajemo uslov if (!fullName || !nationalId)
-button elementu Create New Customer dodajemo dogadaj onClick
-u dogadaj onClick proslijedujemo vrijednost funkcije handleClick()
-u komponentu App.jsx importujemo React Hook useSelector
-kreiramo varijablu const fullName cija je vrijednost jednaka funkciji useSelector()
-u return izjavu dodajemo ternarni uslov fullName === '' ? ... : ...
-u komponentu AccountOperations.jsx importujemo React Hook useDispatch()
-kreiramo varijablu const dispatch
-kreiramo funkcije handleDeposit(), handleWithdrawal(), handleRequestLoan(), handlePayLoan()
-u funkciju handleDeposit() dodajemo uslov if (!depositAmount)
-u funkciju handleDeposit() dodajemo funkciju dispatch()
-u funkciju handleDeposit() dodajemo funkciju setDepositAmount('')
-importujemo React Hook useSelector
-kreiramo varijablu const account cija je vrijednost jednaka funkciji useSelector()
-u funkciju handleWithdrawal() dodajemo uslov if (!withdrawalAmount)
-u funkciju handleWithdrawal() dodajem funkciju dispatch()
-u funkciju handleWithdrawal() dodajemo funkciju setWithdrawalAmount('')
-u funkciju handleRequestLoan() dodajemo uslov if (!loanAmount || !loanPurpose)
-u funkciju handleRequestLoan() dodajemo funkciju dispatch()
-u funkciju handleRequestLoan() dodajemo funkcije setLoanAmount('') i setLoanPurpose('')
-kreiramo varijable const currentLoan, currentPurpose, balance 
-u return izjavi, u span element dodajemo varijable currentLoan i currentLoanPurpose
-u funkciju handlePayLoan() dodajemo funkciju dispatch()
-u return izjavu dodajemo uslov currentLoan > 0 && (...)

269. The Legay Way of Connecting Components to Redux
-u komponenti BalanceDisplay.jsx, funkciji BalanceDisplay dodajemo parametar balance
-kreiramo funkciju mapStataToProps()
-importujmeo funkciju connect
-eksportujemo funkciju connect(mapStateToProps)

270. Redux Middleware and Thunks

271. Making an API Call With Redux Thunks
-u terminalu instaliramo thunk paket
-u terminal ukucamo komandu npm install redux-thunk
-u store.js fajl importujemo funkciju thunk
-u store.js fajl importujemo funkciju applyMiddleware
-u varijablu const store dodajemo funkciju applyMiddleware(thunk)
-u accountSlice.js fajlu, funkciji deposit() dodajemo parametar currency
-u funkciji deposit() dodajemo uslov if (currency === 'USD')
-dodajemo u return anonimnu funkciju sa parametrim dispatch i getState
-u anonimnoj funkciji kreiramo varijable response, data, converted
-u funkciju deposit dodajemo funkciju dispatch()
-u accountSlice.js fajl, u uslov switch dodajemo case 'account/convertingCurrency'
-u komponentu AccountOperations.jsx, button element dodajemo prop disabled i uslov ternarni operator  {isLoading ? ... : ...}

272. The Redux DevTools
-instaliramo paket Redux DevTools Extension
-instaliramo Chrome ekstenziju Redux 
-u terminal ukucamo komandu npm i redux-devtools-extension
-u store.js fajl importujemo funkciju composeWithDevTools 
-u varijablu const store dodajemo funkciju composeWithDevTools

273. What is Redux Toolkit(RTK) ?

274. Creating the Store With RTK
-u terminalu instaliramo redux toolkit paket
-u terminal ukucamo komandu npm i @reduxjs/toolkit
-u store.js fajl importujemo funkciju configureStore
-vrijednost funkcije configureStore pohranimo u varijablu const store

275. Creating the Account Slice
-u accountSlice.js fajl importujemo funkciju createSlice
-kreiramo varijablu const accountSlice cija je vrijednost rezultat funkcije createSlice({ ... })
-u funkciji createSlice() dodajemo varijable name, initialState, reducers
-u reducers objektu kreiramo funkcije
-eksportujemo accountSlice.reducer
-eksportujemo funkcije

276. Back To Thunks
-u acccountSlice.js fajlu kreiramo funkciju deposit
-u reducer objektu kreiramo funkcju convertingCurrency(state)

277. Creating the Customer Slice
-u customerSlice.js fajl importujemo funkciju createSlice
-kreiramo varijablu const customerSlice cija je vrijednost jednaka rezultatu funkcije createSlice({ ... })
-u funkciju createSlice dodajemo varijable fullName, nationalId, reducers
-eksportujemo varijable createCustomer, updateName
-eksportujemo funkciju customerSlice.reducer

278. Redux vs. Context Api
