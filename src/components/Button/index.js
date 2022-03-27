import React from 'react';
import styles from './Button.module.sass'

const Button = () => {
    const {button} = styles;
    return (
            <a href="/#" className={button}>
                read more
            </a>
    );
};

export default Button;