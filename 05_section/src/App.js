import React from 'react';
// import { pizzaData } from './data.js';
import Header from './components/Header';
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
    // console.log(pizzaData);
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
};

export default App;
