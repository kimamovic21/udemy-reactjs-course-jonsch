import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
};

const starContainerStyle = {
    display: 'flex',
};

const StarRating = ({ maxRating = 5, color = '#fcc419', size = 32, className = '', message = [], defaultRating = 0, onSetRating}) => {

    StarRating.propTypes = {
        maxRating: PropTypes.number,
        defaultRating: PropTypes.number,
        color: PropTypes.string,
        size: PropTypes.number,
        message: PropTypes.array,
        className: PropTypes.string,
        onSetRating: PropTypes.func,
    };
    
    const [rating, setRating] = useState(defaultRating);
    const [temporaryRating, setTemporaryRating] = useState(0);

    const handleRating = (rating) => {
        setRating(rating);  
        onSetRating(rating);
    };

    const textStyle = {
        lineHeight: '1',
        margin: '0',
        color: color,
        fontSize: `${size}px`
    };

    return (
        <div style={containerStyle} className={className}> 
            <div style={starContainerStyle}>
                {Array.from({ length: maxRating }, (value, index) => {
                    // console.log(value, index);
                    return (
                        <Star 
                            key={index} 
                            onRate={() => handleRating(index + 1)}
                            full={temporaryRating ? temporaryRating >= index + 1 : rating >= index + 1}
                            onHoverIn={() => setTemporaryRating(index + 1)}
                            onHoverOut={() => setTemporaryRating(0)}
                            color={color}
                            size={size}
                        />
                    )
                })}
            </div>
            <p style={textStyle}>
                {message.length === maxRating 
                    ? message[temporaryRating ? temporaryRating - 1 : rating - 1] 
                    : temporaryRating || rating || ''
                }
            </p>
        </div>
    );
};

export default StarRating;