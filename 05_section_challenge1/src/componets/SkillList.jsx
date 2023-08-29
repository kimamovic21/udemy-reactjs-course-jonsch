import React from 'react';
import Skill from './Skill';

const SkillList = () => {
    return (
        <div className='skill-list'>
            <Skill skill='ReactJS' emoji='😀' color='blue'/>
            <Skill skill='HTML' emoji='😁' color='red'/>
            <Skill skill='Javascript' emoji='😅' color='yellow'/>
            <Skill skill='CSS' emoji='😉' color='lightblue'/>
        </div>
    );
};

export default SkillList;