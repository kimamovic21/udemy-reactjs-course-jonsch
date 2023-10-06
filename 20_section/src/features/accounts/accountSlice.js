import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
    isLoading: false,
};

const accountSlice = createSlice({
    name: 'account',
    initialState: initialState,
    reducers: {
        deposit (state, action) {
            state.balance = state.balance + action.payload;
            state.isLoading = false;
        },
        withdraw (state,action) {
            state.balance = state.balance - action.payload;
        },
        requestLoan: { 
            prepare(amount, purpose) {
                return {
                    payload: { amount, purpose }
                }
            },

            reducer (state, action) {
            if (state.loan > 0) return;

            state.loan = action.payload.amount; 
            state.loanPurpose = action.payload.purpose;
            state.balance = state.balance + action.payload.amount;
        }},
        payLoan (state, action) {
            state.balance = state.balance - state.loan;
            state.loan = 0;
            state.loanPurpose = '';
        },
        convertingCurrency(state, action) {
            state.isLoading = true;
        },
    },
});
// console.log(accountSlice);

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

// console.log(requestLoan(10000, 'Buy car'));

export const deposit = (amount, currency) => {
    if (currency === 'USD') {
        return { type: "account/deposit", payload: amount };
    };

    return async (dispatch, getState) => {
        dispatch({ type: 'account/convertingCurrency ' });

        // API Call
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
        console.log(response);

        const data = await response.json();
        console.log(data);

        const converted = data.rates.USD;

        // return action
        dispatch({ type: 'account/deposit', payload: converted });
    };
};

export default accountSlice.reducer;





/*
const accountReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'account/deposit':  // state domain + event name
            return {
                ...state,
                balance: state.balance + action.payload,
                isLoading: false
            };
        
        case 'account/withdraw': 
            return {
                ...state,
                balance: state.balance - action.payload
            };

        case 'account/requestLoan':
            if(state.loan > 0) return state;

            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount
            };
        
        case 'account/payLoan':
            return {
                ...state,
                loan: 0,
                loanPurpose: '',
                balance: state.balance - state.loan
            };
        
        case 'account/convertingCurrency':
            return {
                ...state,
                isLoading: true
            };
        
        default: 
            return state;
    };
};

export default accountReducer;

export const deposit = (amount, currency) => {
    if (currency === 'USD') {
        return { type: "account/deposit", payload: amount };
    };

    return async (dispatch, getState) => {
        dispatch({ type: 'account/convertingCurrency ' });

        // API Call
        const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`);
        console.log(response);

        const data = await response.json();
        console.log(data);

        const converted = data.rates.USD;

        // return action
        dispatch({ type: 'account/deposit', payload: converted });
    };
};

export const withdraw = (amount) => {
    return { type: "account/withdraw", payload: amount };
};

export const requestLoan = (amount, purpose) => {
    return {
        type: "account/requestLoan",
        payload: { amount: amount, purpose: purpose}
    };
};

export const payLoan = () => {
    return { type: "account/payLoan" };
};

*/