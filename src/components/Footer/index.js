import React from 'react';
import styles from './Footer.module.sass'

const Footer = () => {
    const {footer, paragraph, link} = styles;
    return (
        <footer className={footer}>
            <p className={paragraph}>
                Sample text. Click to select the text box. Click again or double click to start editing the text.
            </p>
            <span><a href="/#" className={link}>My GitHub</a></span>
        </footer>
    );
};

export default Footer;