import React, { useState } from 'react';

const Box = ({ children, element }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="box">
            <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
                {isOpen ? "–" : "+"}
            </button>

            {isOpen && children }
            {/* {isOpen && element} */}
        </div>
    );
};

export default Box;