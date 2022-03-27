import React from 'react';
import styles from './Main.module.sass';


const Main = () => {
    const {main, imageContainer, img, gridBg, bg, infoContainer} = styles;
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
            <div className={infoContainer}></div>
        </main>
    );
};

export default Main;