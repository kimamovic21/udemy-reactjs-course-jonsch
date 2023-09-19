import React from 'react';

const ErrorMessage = ({ message }) => {
    // console.error(message);

    return (
        <p className='error'>
            <span>🚫</span> {message}
        </p>
    );
};

export default ErrorMessage;