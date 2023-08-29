import React from 'react';

// const Pizza = (props) => {
    // console.log(props);
const Pizza = ({pizzaObj}) => {
    // console.log(pizzaObj);

    // if(props.pizzaObj.soldOut) return null;
    // if(pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                {/* <span>${pizzaObj.price}</span> */}

                {pizzaObj.soldOut ? (
                    <span>SOLD OUT</span>
                ) : (
                    <span>${pizzaObj.price}</span>
                )}

            </div>
        </li>
    );
};

export default Pizza;