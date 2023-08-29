import React from 'react';
import Pizza from './Pizza';
import { pizzaData } from '../data.js';

const Menu = () => {
    // console.log(pizzaData);
    // const pizzas = [];
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    console.log(numPizzas);

    return (
        <main className='menu'>
            <h2>Our Menu</h2>
            {/* {numPizzas > 0 && ... } */}


            {numPizzas > 0 ? (
                <>
                    <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone even, all organic, all delicious.</p>
                    <ul className='pizzas'>
                        {pizzas.map((pizza) => {
                            // console.log(pizza);
                            return (
                                <Pizza 
                                    key={pizza.name}
                                    pizzaObj={pizza}                           
                                />
                            )
                        })}
                    </ul>
                </>
                ) : (
                    <p>We're still working on our menu. Please come back later.</p>
                )}

            {/* <Pizza 
                name='Pizza Spinaci'
                ingredients='Tomato, mozarella, spinach and ricotta cheese'
                photoName={require(`../pizzas/spinaci.jpg`)}
                price={10}    
            /> */}
        </main>
    );
};

export default Menu;