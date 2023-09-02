import React from 'react';
import { useState } from 'react';

const Form = ({ onAddItems }) => {
    // console.log(onAddItems);

    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);
    // const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        // console.log(e);
        e.preventDefault();
        console.log('click');

        if (!description) return;

        const newItem = { 
            id: Date.now(), 
            description:description, 
            quantity: quantity, 
            packed: false 
        };
        // console.log(newItem);

        // handleAddItems(newItem);
        onAddItems(newItem);

        setDescription('');
        setQuantity(1);
    };

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <h3>What do you need for your trip ❓</h3>
            <select 
                value={quantity} 
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {
                Array
                    .from({ length: 20 }, (value, index) => {
                        // console.log(value, index);
                        return index + 1;
                    })
                    .map((number) => {
                        // console.log(number);
                        return (
                            <option value={number} key={number}>
                                {number}
                            </option>
                        );
                    })
                }
            </select>
            <input 
                type="text" 
                placeholder='Item...'
                value={description}
                onChange={(e) => {
                    // console.log(e.target);
                    // console.log(e.target.value);
                    setDescription(e.target.value)}
                }
            />
            <button>Add</button>
        </form>
    );
};

export default Form;