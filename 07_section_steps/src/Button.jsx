import React from 'react';

const Button = ({ textColor, bgColor, onClick, emoji, text, children }) => {
    return (
        <button 
            style={{ backgroundColor: bgColor, color: textColor }} 
            onClick={onClick}
        >
           {/* <span>{emoji}</span> {text} */}
           {children}
        </button>
    );
};

export default Button;