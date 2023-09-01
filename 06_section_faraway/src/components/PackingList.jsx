import React from 'react';
import Item from './Item';

const initialItems = [
    { 
      id: 1, 
      description: "Passport", 
      quantity: 1, 
      packed: true
    },
    { 
      id: 2, 
      description: "Socks", 
      quantity: 4, 
      packed: false 
    },
    { 
        id: 3, 
        description: "Charger", 
        quantity: 1, 
        packed: false 
      },
  ];

const PackingList = () => {
    return (
        <div className='list'>
            <ul>
                {initialItems.map((item) => {
                    return (
                        <Item 
                            key={item.id} 
                            item={item}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default PackingList;