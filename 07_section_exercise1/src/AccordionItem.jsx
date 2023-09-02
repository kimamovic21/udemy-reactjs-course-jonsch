import React, { useState } from 'react';

const AccordionItem = ({ number, title, text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}> 
            <p className='number'>{number < 9 ? `0${number + 1}`: number + 1}</p>
            <p className='text'>{title}</p>
            <p className='icon'>{isOpen ? '-' : '+'}</p>
            {isOpen && <div className='content-box'>{text}</div>}
        </div>
    );
};

export default AccordionItem;