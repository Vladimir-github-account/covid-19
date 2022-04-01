import React from 'react';
import styles from './InfoContainer.module.sass';
import Button from "../Button";

const InfoContainer = () => {
    const {infoContainer, mainHeader, info, wrapper} = styles;
    return (
        <div className={infoContainer}>
            <h1 className={mainHeader}>COVID-19 Vaccine Updates</h1>
            <div className={wrapper}>
                <p className={info}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis hic possimus quasi. Blanditiis cupiditate eligendi facere minus odio recusandae, sint temporibus!</p>
                <Button/>
            </div>
        </div>

    );
};

export default InfoContainer;