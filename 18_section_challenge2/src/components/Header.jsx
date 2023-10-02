import React from "react";
import ViteIcon from "../assets/vite.svg";

const Header = () => {
    return (
        <header className='app-header'>
            <img src={ViteIcon} alt='React logo' />
            <h1>The React Quiz</h1>
        </header>
    );
};
  
export default Header;