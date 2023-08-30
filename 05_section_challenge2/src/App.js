import React from 'react';
import Avatar from './componets/Avatar';
import Intro from './componets/Intro';
import SkillList from './componets/SkillList';

function App() {
    return (
      <div className="card">
           <Avatar />
          <div className="data">
            <Intro />
            <SkillList />
          </div>
      </div>
    );
};

export default App;
