import React from 'react';

const AccordionItem = ({ number, title, curOpen, onCurOpen, children }) => {
    const isOpen = number === curOpen;
    
    const handleToggle = () => {
       onCurOpen(isOpen ? null : number);
    };

    return (
        <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}> 
            <p className='number'>{number < 9 ? `0${number + 1}`: number + 1}</p>
            <p className='text'>{title}</p>
            <p className='icon'>{isOpen ? '-' : '+'}</p>
            {isOpen && <div className='content-box'>{children}</div>}
        </div>
    );
};

export default AccordionItem;