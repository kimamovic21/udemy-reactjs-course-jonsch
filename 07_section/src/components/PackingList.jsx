import React, { useState } from 'react';
import Item from './Item';

// const initialItems = [
//     { 
//       id: 1, 
//       description: "Passport", 
//       quantity: 1, 
//       packed: true
//     },
//     { 
//       id: 2, 
//       description: "Socks", 
//       quantity: 4, 
//       packed: false 
//     },
//     { 
//         id: 3, 
//         description: "Charger", 
//         quantity: 1, 
//         packed: false 
//       },
// ];

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
    // console.log(items);
    // console.log(onDeleteItem);
    // console.log(onToggleItem);

    const [sortBy, setSortBy] = useState('input');

    let sortedItems;

    if (sortBy === 'input') {
        sortedItems = items;
    };

    if (sortBy === 'description') {
        sortedItems = items.slice().sort((a, b) => { 
            // console.log(a, b);
            return a.description.localeCompare(b.description)
        });
    };

    if (sortBy === 'packed') {
        sortedItems = items.slice().sort((a, b) => {
            // console.log(a, b);
            return Number(a.packed) - Number(b.packed)
        });
    };

    return (
        <div className='list'>

            <ul>
                {/* {initialItems.map((item) => { */}
                {/* {items.map((item) => { */}
                {sortedItems.map((item) => {
                    return (
                        <Item 
                            key={item.id} 
                            item={item}
                            onDeleteItem={onDeleteItem}
                            onToggleItem={onToggleItem}
                        />
                    );
                })}
            </ul>

            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>

                <button onClick={onClearList}>Clear list</button>
            </div>

        </div>
    );
};

export default PackingList;