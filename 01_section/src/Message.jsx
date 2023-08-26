import React from 'react';

const Message = (props) => {
    console.log(props);
    return (
        <p>You have read <strong>{props.count}</strong> {props.count > 1 ? 'advices' : 'advice'}.</p>
    );
};

export default Message;