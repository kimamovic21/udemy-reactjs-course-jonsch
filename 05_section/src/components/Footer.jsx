import React from 'react';
import Order from './Order';

const Footer = () => {
    const hour = new Date().getHours();
    // console.log(hour);
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if (hour >= openHour && hour <= closeHour) alert(`We're currently open`);
    // else alert(`Sorry, we're closed!`);

    // if (!isOpen) return <p>CLOSED</p>;

    return (
        <footer className='footer'>
            {/* <span>{new Date().toLocaleTimeString()}</span>. We're currently open */}
            {isOpen ? (
                <Order 
                    openHour={openHour}
                    closeHour={closeHour}
                />
            ) : (
                <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
            )}
        </footer>
    );
};

export default Footer;