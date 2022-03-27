import React from 'react';
import styles from './Main.module.sass';
import InfoContainer from "../InfoContainer";

const Main = () => {
    const {main, imageContainer, img, gridBg, bg} = styles;
    return (
        <main className={main}>
            <div className={imageContainer}>
                <img className={img}
                     src="./doctor.jpg"
                     alt="img"/>
            </div>
            <div className={gridBg}>
                <div className={bg}/>
            </div>
            <InfoContainer/>
        </main>
    );
};

export default Main;