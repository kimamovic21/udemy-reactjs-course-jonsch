import React, { useState } from 'react';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [friends, setFriends] = useState(initialFriends); 
    const [selectedFriend, setSelectedFriend] = useState(null);

    const handleShowAddFriend = () => {
        setShowAddFriend((prevState) => !prevState);
    }; 
    
    const handleAddFriend = (friend) => {
        setFriends((friends) => {
            return [...friends, friend];
        });
        setShowAddFriend(false);
    };

    const handleSelection = (friend) => {
        // setSelectedFriend(friend);
        setSelectedFriend((currentlySelected) => currentlySelected?.id === friend.id ? null : friend);
        setShowAddFriend(false);
    };

    const handleSplitBill = (value) => {
        console.log(value);

        setFriends((friends) => 
            friends.map((friend) => {
                return friend.id === selectedFriend.id 
                    ? {...friend, balance: friend.balance + value} 
                    : friend;
            }
        ));

        setSelectedFriend(null);
    };

    return (
        <div className='app'>

            <div className='sidebar'>
                <FriendsList 
                    friends={friends} 
                    onSelection={handleSelection}
                    selectedFriend={selectedFriend}
                />

                {showAddFriend &&  <FormAddFriend onAddFriend={handleAddFriend}/>}

                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? 'Close' : 'Add Friend'}
                </Button>
            </div>

           {selectedFriend && (
                <FormSplitBill 
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                    key={selectedFriend.id}
                />
            )}

        </div>
    );
};

export default App;