import React from 'react';
import Nav from "../Nav";
import styles from './Header.module.sass'

const Header = () => {
    const {header, logo} = styles;
    return (
        <header className={header}>
            <img src="./logo.png" alt="logo" className={logo}/>
            <Nav/>
        </header>
    );
};

export default Header;