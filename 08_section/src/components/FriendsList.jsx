import React from 'react';
import Friend from './Friend';

const FriendsList = ({ friends, onSelection, selectedFriend }) => {
    // console.log(friends);

    return (
        <ul>
          {friends.map((friend) => {
            // console.log(friend);
            return (
                <Friend 
                    key={friend.id}  
                    friend={friend}
                    onSelection={onSelection}
                    selectedFriend={selectedFriend}
                />
            )
          })}
        </ul>
    );
};

export default FriendsList;