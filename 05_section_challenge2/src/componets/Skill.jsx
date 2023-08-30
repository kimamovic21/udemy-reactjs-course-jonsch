import React from 'react';

const Skill = ({ skill, color, level }) => {
    return (
        <div className='skill' style={{backgroundColor: color}}>
            <span>{skill}</span>
            <span>{level === 'beginner' && '👶'}</span>
            <span>{level === 'intermediate' && '👍'}</span>
            <span>{level === 'advanced' && '💪'}</span>
        </div>
    );
};

export default Skill;