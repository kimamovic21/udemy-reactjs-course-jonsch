import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './components/StarRating';
import Test from './components/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    <StarRating  
        maxRating={5} 
        message={[ 'Terrible', 'Bad', 'Ok', 'Good', 'Amazing' ]}
        className='test'
        defaultRating={3}
    /> 
    <Test /> 
  </>
);
