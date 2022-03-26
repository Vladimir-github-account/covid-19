import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
    const {navToggle, } = styles;
    return (
        <nav className={navToggle}><span/><span/><span/></nav>
    );
};

export default Nav;