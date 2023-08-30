import React from 'react';

const Avatar = () => {
    return (
        <img 
            className='avatar' 
            src={require(`../avatar.png`)}
            alt="ReactJS" 
        />
    );
};

export default Avatar;