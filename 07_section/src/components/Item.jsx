import React from 'react';

const Item = ({ item, onDeleteItem, onToggleItem }) => {
    // console.log(item);
    // console.log(onDeleteItem);
    // console.log(onToggleItem);

    return (
        <li>
            <input 
                type="checkbox" 
                value={item.packed}
                onChange={() => {
                    // console.log('click');
                    onToggleItem(item.id);
                }}
            />
           <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                {item.quantity} {item.description}
            </span> 
           <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
};

export default Item;