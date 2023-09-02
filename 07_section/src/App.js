import React, { useState } from 'react';
import Logo from './components/Logo';
import Stats from './components/Stats';
import Form from './components/Form';
import PackingList from './components/PackingList';

// const initialItems = [
//   { 
//     id: 1, 
//     description: "Passport", 
//     quantity: 1, 
//     packed: false
//   },
//   { 
//     id: 2, 
//     description: "Socks", 
//     quantity: 4, 
//     packed: false 
//   },
//   { 
//       id: 3, 
//       description: "Charger", 
//       quantity: 1, 
//       packed: false 
//     },
// ];

const App = () => {
  // const [items, setItems] = useState(initialItems);
    const [items, setItems] = useState([]);

    const handleAddItems = (item) => {
      // console.log(item);
      setItems((items) =>  {
          return [...items, item];
      });
    };

    const handleDeleteItem = (id) => {
      // console.log('click');
      // console.log('Item id: ', id);
      if (window.confirm('Are you sure you want to delete this item?')) {
        setItems(
          (items) => items.filter((item) => { 
              // console.log(item);
              return item.id !== id
          })
        );
        console.log('The item was successfully deleted!');
      } else {
        console.log('The item was not deleted.');
      };
    };

    const handleToggleItem = (id) => {
        setItems((items) => items.map((item) => {
            return item.id === id ? {...item, packed: !item.packed} : item})
        );
    };

    const handleClearList = () => {
        const confirmed = window.confirm('Are you sure you want to delete all items ?');
        if (confirmed) {
          setItems([]);
        };
    };

    return (
       <div className='App'>
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList 
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats items={items} />
       </div>
    );
};

export default App;