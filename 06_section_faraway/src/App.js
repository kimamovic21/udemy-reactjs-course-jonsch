import React from 'react';
import Logo from './components/Logo';
import Stats from './components/Stats';
import Form from './components/Form';
import PackingList from './components/PackingList';

const App = () => {
    return (
       <div className='App'>
            <Logo />
            <Form />
            <PackingList />
            <Stats />
       </div>
    );
};

export default App;