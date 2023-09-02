import React from 'react';

const Stats = ({ items }) => {
    if (!items.length) {
        return(
            <p className='stats'>
                <em>Start adding some items to your packing list 🧳 </em>
            </p>
        );
    };
    // console.log(items);

    const numItems = items.length;
    // console.log(numItems);
    const numPacked = items.filter((item) => {
        // console.log(item);
        return item.packed;
    }).length;
    // console.log(numPacked);
    const numPercentage = Math.round(numPacked / numItems * 100);
    // console.log(numPercentage);

    return (
        <footer className='stats'>
            <em>
                🧳 You have <span>{numItems}</span> {numItems === 1 ? 'item' : 'items'} on your list 
                and you have already packed <span>{numPacked}</span> (<span>{numPercentage}%)</span>
            </em>
            <br/>
            {numPercentage === 100 && 'You got everything! Ready to go ✈️🚆🚢🚗.'}
        </footer>
    );
};

export default Stats;