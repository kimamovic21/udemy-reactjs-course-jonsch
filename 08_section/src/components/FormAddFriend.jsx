import React, { useState } from 'react';
import Button from './Button';

const FormAddFriend = ({ onAddFriend }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('https://www.w3schools.com/howto/img_avatar.png');

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = crypto.randomUUID();

        if (!name || !image) return;

        const newFriend = {
            name: name,
            image: `${image}?=${id}`,
            balance: 0,
            id: id,
        };
        console.log(newFriend);
        onAddFriend(newFriend);

        setName('');
        setImage('https://www.w3schools.com/howto/img_avatar.png');
    };

    return (
        <form className='form-add-friend' onSubmit={handleSubmit}>

            <label>Friend name: </label>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Image URL: </label>
            <input 
                type="text" 
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />

           <Button>
                Add
           </Button>

        </form>
    );
};

export default FormAddFriend;