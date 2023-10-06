import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import accountReducer from './features/accounts/accountSlice';
import customerReducer from './features/customers/customerSlice';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
});

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;





// import {applyMiddleware, compose, createStore} from "redux"; // add first 2 imports
// import {rootReducer} from "./root.reducer"; 
// import {logger} from "redux-logger/src"; // installed new package
 
// // write down these 2 lines and define your middleware
// const middlewares = [logger]
// const composedEnhancers = compose(applyMiddleware(...middlewares));
 
// // apply middlewares 1. rootReducer, 2. undefined, 3. composedEnhancers
// const store = createStore(rootReducer, undefined, composedEnhancers)
 
// export default store;
